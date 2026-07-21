import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import debounce from "lodash.debounce";
import { useCalendar } from "@/context/CalendarProvider";
import {
  Day,
  PaginatedSchedulerData,
  PaginatedSchedulerRow,
  ReservationType,
  SchedulerCategory,
  SchedulerData,
  SchedulerProjectData,
  TooltipData,
  ZoomLevel
} from "@/types/global";
import { getTooltipData } from "@/utils/getTooltipData";
import { generateAutoCategories } from "@/utils/generateAutoCategories";
import { usePagination } from "@/hooks/usePagination";
import EmptyBox from "../EmptyBox";
import { Grid, Header, LeftColumn, Loader, Tooltip } from "..";
import { CalendarProps } from "./types";
import { StyledOuterWrapper, StyledInnerWrapper, StyledEmptyBoxWrapper } from "./styles";

// Stable empty reference for the no-fade case: returning a fresh Set each render would flow into the Tiles `nodes`
// memo (a dep), rebuild its liveMap every render, and fire the exit-tracking effect in a loop.
const EMPTY_UNIT_IDS: Set<string> = new Set();

const initialTooltipData: TooltipData = {
  coords: { x: 0, y: 0 },
  mouseCoords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  },
  reservationData: {
    startTime: "",
    startDate: "",
    client: "",
    eventName: "",
    reservationType: ReservationType.Tour,
    bookingNumber: ""
  },
  tileBounds: { x: 0, y: 0, width: 0, height: 0 }
};

/** Build ordered groups: categories sorted by maxPassengers, then uncategorized, then subcontract */
function buildGroupedPage(
  page: PaginatedSchedulerData,
  categories: SchedulerCategory[] | undefined
) {
  const sortedCategories = categories
    ? [...categories].sort((a, b) => a.maxPassengers - b.maxPassengers)
    : [];

  type GroupEntry =
    | { type: "category"; category: SchedulerCategory; items: PaginatedSchedulerRow[] }
    | { type: "uncategorized"; items: PaginatedSchedulerRow[] }
    | { type: "subcontract"; items: PaginatedSchedulerRow[] };

  const groups: GroupEntry[] = [];

  // Category groups
  for (const cat of sortedCategories) {
    const items = page.filter(
      (item) => !item.isSubcontract && item.categoryId === cat.id
    );
    if (items.length > 0) {
      groups.push({ type: "category", category: cat, items });
    }
  }

  // Uncategorized own units (no categoryId, not subcontract)
  const hasCats = sortedCategories.length > 0;
  const uncategorized = page.filter(
    (item) => !item.isSubcontract && (!item.categoryId || !hasCats)
  );
  if (uncategorized.length > 0 && hasCats) {
    // Only show as a separate group if categories exist
    groups.push({ type: "uncategorized", items: uncategorized });
  } else if (uncategorized.length > 0) {
    // No categories defined — just flat list, no header
    groups.push({ type: "uncategorized", items: uncategorized });
  }

  // Subcontract
  const subcontract = page.filter((item) => item.isSubcontract);
  if (subcontract.length > 0) {
    groups.push({ type: "subcontract", items: subcontract });
  }

  return groups;
}

export const Calendar: FC<CalendarProps> = ({
  data,
  baseData,
  categories,
  onTileClick,
  onItemClick,
  toggleTheme,
  topBarWidth,
  onEventDrop,
  onEventDrag,
  draggableConfig,
  onTimeRangeSelect,
  onMultiTimeRangeSelect,
  clickToAddConfig
}) => {
  const [tooltipData, setTooltipData] = useState<TooltipData>(initialTooltipData);
  const [filteredData, setFilteredData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [fadingGroups, setFadingGroups] = useState<Set<string>>(new Set());
  const fadeTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => fadeTimers.current.forEach(clearTimeout), []);
  const {
    zoom,
    startDate,
    isLoading,
    config: { includeTakenHoursOnWeekendsInDayView, showTooltip, showThemeToggle }
  } = useCalendar();
  const gridRef = useRef<HTMLDivElement>(null);
  // The left column's top spacer must match the calendar header block (Topbar + Legend + canvas header),
  // whose height varies with zoom and the showTopbar/showLegend toggles — measure it instead of hardcoding.
  const headerBlockRef = useRef<HTMLDivElement>(null);
  const [headerBlockHeight, setHeaderBlockHeight] = useState(124);
  const {
    page,
    projectsPerPerson,
    rowsPerItem,
    currentPageNum,
    pagesAmount,
    next,
    previous,
    reset
  } = usePagination(filteredData);

  // Auto-generate categories from capacity when none provided
  const { effectiveCategories, effectivePage } = useMemo(() => {
    if (categories && categories.length > 0) {
      return { effectiveCategories: categories, effectivePage: page };
    }
    const auto = generateAutoCategories(page);
    if (auto.categories.length === 0) {
      return { effectiveCategories: undefined, effectivePage: page };
    }
    // Assign categoryId to each item based on its capacity
    const effectivePage: PaginatedSchedulerData = page.map((item) => {
      if (item.isSubcontract || item.capacity == null) return item;
      const catId = auto.capacityToCategoryId.get(item.capacity);
      return catId ? { ...item, categoryId: catId } : item;
    });
    return { effectiveCategories: auto.categories, effectivePage };
  }, [categories, page]);

  // Fade-then-collapse: expanding is immediate (tileIn/rowIn carry it in), but collapsing first fades the group's rows
  // and tiles out IN PLACE (layout held), then commits the collapse a beat later so both columns snap closed together —
  // no tile freezes over a snapped-up row mid-fade. Reduced-motion collapses instantly.
  const handleToggleGroup = useCallback(
    (groupId: string) => {
      if (collapsedGroups.has(groupId)) {
        setCollapsedGroups((prev) => {
          const next = new Set(prev);
          next.delete(groupId);
          return next;
        });
        setFadingGroups((prev) => {
          if (!prev.has(groupId)) return prev;
          const next = new Set(prev);
          next.delete(groupId);
          return next;
        });
        return;
      }
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setCollapsedGroups((prev) => new Set(prev).add(groupId));
        return;
      }
      setFadingGroups((prev) => new Set(prev).add(groupId));
      const timer = setTimeout(() => {
        setCollapsedGroups((prev) => new Set(prev).add(groupId));
        setFadingGroups((prev) => {
          const next = new Set(prev);
          next.delete(groupId);
          return next;
        });
      }, 190);
      fadeTimers.current.push(timer);
    },
    [collapsedGroups]
  );

  // Compute all collapsible group IDs
  const allGroupIds = useMemo(() => {
    const ids: string[] = [];
    const sortedCats = effectiveCategories
      ? [...effectiveCategories].sort((a, b) => a.maxPassengers - b.maxPassengers)
      : [];
    for (const cat of sortedCats) {
      if (effectivePage.some((item) => !item.isSubcontract && item.categoryId === cat.id)) {
        ids.push(cat.id);
      }
    }
    if (effectivePage.some((item) => item.isSubcontract)) {
      ids.push("__subcontract__");
    }
    return ids;
  }, [effectiveCategories, effectivePage]);

  const handleExpandAll = useCallback(() => {
    setCollapsedGroups(new Set());
  }, []);

  const handleCollapseAll = useCallback(() => {
    setCollapsedGroups(new Set(allGroupIds));
  }, [allGroupIds]);

  // Units whose group is mid-fade — their grid tiles render as `exiting` (opacity 0) during the fade beat.
  const fadingUnitIds = useMemo(() => {
    if (fadingGroups.size === 0) return EMPTY_UNIT_IDS;
    const ids = new Set<string>();
    for (const item of effectivePage) {
      const gid = item.isSubcontract ? "__subcontract__" : item.categoryId;
      if (gid && fadingGroups.has(gid)) ids.add(item.id);
    }
    return ids;
  }, [fadingGroups, effectivePage]);

  // Build grouped structure and compute visible data
  const {
    visiblePage,
    visibleRowsPerItem,
    visibleTotalRows,
    visibleProjectsPerPerson,
    separatorRowIndices,
    subcontractSeparatorRow
  } = useMemo(() => {
    const groups = buildGroupedPage(effectivePage, effectiveCategories);
    const hasCategoryHeaders = (effectiveCategories?.length ?? 0) > 0;

    // Map item IDs to original page indices for rowsPerItem/projectsPerPerson lookup
    const idToPageIdx = new Map<string, number>();
    page.forEach((item, i) => idToPageIdx.set(item.id, i));

    const visiblePage: PaginatedSchedulerData = [];
    const visibleRowsPerItem: number[] = [];
    const visibleProjectsPerPerson: SchedulerProjectData[][][] = [];
    const separatorRowIndices: number[] = [];

    let currentRow = 0;
    let subcontractSeparatorRow = -1;

    for (const group of groups) {
      const needsHeader =
        group.type === "subcontract" ||
        (group.type === "category" && hasCategoryHeaders);

      if (needsHeader) {
        const groupId =
          group.type === "subcontract"
            ? "__subcontract__"
            : (group as { type: "category"; category: SchedulerCategory }).category.id;
        const isCollapsed = collapsedGroups.has(groupId);

        separatorRowIndices.push(currentRow);
        if (group.type === "subcontract") subcontractSeparatorRow = currentRow;

        if (!isCollapsed) {
          for (const item of group.items) {
            const idx = idToPageIdx.get(item.id) ?? 0;
            const rows = rowsPerItem[idx];
            visiblePage.push(item);
            visibleRowsPerItem.push(rows);
            visibleProjectsPerPerson.push(projectsPerPerson[idx]);
            currentRow += rows;
          }
        }
      } else {
        for (const item of group.items) {
          const idx = idToPageIdx.get(item.id) ?? 0;
          const rows = rowsPerItem[idx];
          visiblePage.push(item);
          visibleRowsPerItem.push(rows);
          visibleProjectsPerPerson.push(projectsPerPerson[idx]);
          currentRow += rows;
        }
      }
    }

    const visibleTotalRows = visibleRowsPerItem.reduce((acc, curr) => acc + curr, 0);
    return {
      visiblePage,
      visibleRowsPerItem,
      visibleTotalRows,
      visibleProjectsPerPerson,
      separatorRowIndices,
      subcontractSeparatorRow
    };
  }, [effectivePage, effectiveCategories, page, collapsedGroups, rowsPerItem, projectsPerPerson]);

  const debouncedHandleMouseOver = useRef(
    debounce(
      (
        e: MouseEvent,
        schedulerData: SchedulerData,
        startDate: Day,
        rowsPerItem: number[],
        projectsPerPerson: SchedulerProjectData[][][],
        zoom: ZoomLevel
      ) => {
        if (!gridRef.current) return;
        const { tile, segmentId } = getTileElement(e);
        if (!segmentId || !tile) {
          // Hide via the visible flag only — keep tooltipData so the card holds its position/content while it fades.
          setIsVisible(false);
          return;
        }
        const reservation = getReservation(segmentId, schedulerData);
        const gridRect = gridRef.current.getBoundingClientRect();
        const tileRect = tile.getBoundingClientRect();
        const tooltipCoords = { x: e.clientX - gridRect.left, y: e.clientY - gridRect.top };
        const mouseCoords = {
          x: e.clientX - gridRect.left,
          y: e.clientY - gridRect.top
        };
        const tileBounds = {
          x: tileRect.left - gridRect.left,
          y: tileRect.top - gridRect.top,
          width: tileRect.width,
          height: tileRect.height
        };
        const {
          coords: { x, y },
          resourceIndex,
          disposition,
          reservationData
        } = getTooltipData(
          reservation!,
          startDate,
          tooltipCoords,
          rowsPerItem,
          projectsPerPerson,
          zoom,
          includeTakenHoursOnWeekendsInDayView
        );
        setTooltipData({
          coords: { x, y },
          mouseCoords,
          resourceIndex,
          disposition,
          reservationData,
          tileBounds
        });
        setIsVisible(true);
      },
      4
    )
  );
  const debouncedFilterData = useRef(
    debounce((dataToFilter: SchedulerData, enteredSearchPhrase: string) => {
      reset();
      setFilteredData(
        dataToFilter
          .map((item) => ({
            ...item,
            data: item.data.filter((row) => {
              const { title, description, subtitle } = row;
              return (
                title?.toLowerCase().includes(enteredSearchPhrase.toLowerCase()) ||
                subtitle?.toLowerCase().includes(enteredSearchPhrase.toLowerCase()) ||
                description?.toLowerCase().includes(enteredSearchPhrase.toLowerCase())
              );
            })
          }))
          .filter((item) => item.data.length > 0)
      );
    }, 500)
  );

  const getReservation = (segmentId: string, schedulerData: SchedulerData) => {
    if (!segmentId) return;
    return schedulerData
      .flatMap((item) => item.data)
      .find((row) => row.segmentId === segmentId);
  };

  const getTileElement = (
    event: MouseEvent
  ): { tile: Element | null; segmentId: string | null } => {
    if (!event.target) return { tile: null, segmentId: null };
    const tile = (event.target as HTMLElement).closest("[data-segment-id]");
    if (!tile) return { tile: null, segmentId: null };
    return { tile, segmentId: tile.getAttribute("data-segment-id") };
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSearchPhrase(phrase);
    debouncedFilterData.current.cancel();
    if (phrase) {
      debouncedFilterData.current(data, phrase);
    } else {
      reset();
      setFilteredData(data);
    }
  };

  const handleMouseLeave = useCallback(() => {
    debouncedHandleMouseOver.current.cancel();
    // Fade out in place — don't reset tooltipData or the card would jump to (0,0) during the transition.
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) =>
      debouncedHandleMouseOver.current(
        e,
        data,
        startDate,
        visibleRowsPerItem,
        visibleProjectsPerPerson,
        zoom
      );
    const gridArea = gridRef.current;
    if (!gridArea) return;
    gridArea.addEventListener("mousemove", handleMouseOver);
    gridArea.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      gridArea.removeEventListener("mousemove", handleMouseOver);
      gridArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    debouncedHandleMouseOver,
    handleMouseLeave,
    visibleProjectsPerPerson,
    visibleRowsPerItem,
    startDate,
    zoom,
    data
  ]);

  useEffect(() => {
    if (searchPhrase) {
      debouncedFilterData.current.cancel();
      debouncedFilterData.current(data, searchPhrase);
    } else {
      setFilteredData(data);
    }
  }, [data, searchPhrase]);

  useLayoutEffect(() => {
    const el = headerBlockRef.current;
    if (!el) return;
    const measure = () => setHeaderBlockHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <StyledOuterWrapper>
      <LeftColumn
        headerHeight={headerBlockHeight}
        data={effectivePage}
        categories={effectiveCategories}
        pageNum={currentPageNum}
        pagesAmount={pagesAmount}
        rows={rowsPerItem}
        onLoadNext={next}
        onLoadPrevious={previous}
        searchInputValue={searchPhrase}
        onSearchInputChange={handleSearch}
        onItemClick={onItemClick}
        collapsedGroups={collapsedGroups}
        fadingGroups={fadingGroups}
        onToggleGroup={handleToggleGroup}
        allGroupIds={allGroupIds}
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
      />
      <StyledInnerWrapper>
        <Header
          ref={headerBlockRef}
          zoom={zoom}
          topBarWidth={topBarWidth}
          showThemeToggle={showThemeToggle}
          toggleTheme={toggleTheme}
        />
        {data.length ? (
          <Grid
            data={visiblePage}
            baseData={baseData || data}
            zoom={zoom}
            rows={visibleTotalRows}
            ref={gridRef}
            onTileClick={onTileClick}
            onEventDrop={onEventDrop}
            onEventDrag={onEventDrag}
            draggableConfig={draggableConfig}
            onDragStateChange={setIsDragging}
            onTimeRangeSelect={onTimeRangeSelect}
            onMultiTimeRangeSelect={onMultiTimeRangeSelect}
            clickToAddConfig={clickToAddConfig}
            separatorRowIndices={separatorRowIndices}
            subcontractSeparatorRow={subcontractSeparatorRow}
            fadingUnitIds={fadingUnitIds}
          />
        ) : (
          <StyledEmptyBoxWrapper width={topBarWidth}>
            {isLoading ? <Loader isLoading={isLoading} position="left" /> : <EmptyBox />}
          </StyledEmptyBoxWrapper>
        )}
        {/* Kept mounted so the fade plays both directions; `visible` drives it. Dropped the resourceIndex>-1 guard —
            it's vestigial (Tooltip ignores resourceIndex) and buggy (separator-band offset makes it -1 for the bottom
            subcontract tiles, so those events showed no tooltip). Empty-space hovers are still suppressed upstream. */}
        {showTooltip && (
          <Tooltip tooltipData={tooltipData} visible={isVisible && !isDragging} />
        )}
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
};

export default Calendar;
