import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { createDemoData, mockCategories } from "./mock/appMock";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, SchedulerProjectData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { StyledSchedulerFrame } from "./styles";
import { SchedulerRef } from "./components/Scheduler/types";
import { Scheduler } from ".";

// Dialog styles
const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const DialogBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const DialogTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
`;

const DialogContent = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const SelectionList = styled.ul`
  margin: 12px 0;
  padding-left: 20px;
  list-style: none;
`;

const SelectionItem = styled.li<{ $hasConflict?: boolean }>`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: ${({ $hasConflict }) => ($hasConflict ? "#e67e22" : "#333")};
  &:last-child {
    border-bottom: none;
  }
`;

const ConflictBadge = styled.span`
  background: #fff3cd;
  color: #856404;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  margin-left: 8px;
`;

const DialogButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const DialogButton = styled.button<{ $primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: ${({ $primary }) => ($primary ? "none" : "1px solid #ddd")};
  background: ${({ $primary }) => ($primary ? "#3498db" : "white")};
  color: ${({ $primary }) => ($primary ? "white" : "#333")};

  &:hover {
    background: ${({ $primary }) => ($primary ? "#2980b9" : "#f5f5f5")};
  }
`;

// Dialog state type
type DialogState = {
  isOpen: boolean;
  type: "single" | "multi";
  selections: any[];
  resolve: ((value: { continueMultiSelect: boolean }) => void) | null;
};

function App() {
  const schedulerRef = useRef<SchedulerRef>(null);
  const [jumpDate, setJumpDate] = useState("");
  const [dialog, setDialog] = useState<DialogState>({
    isOpen: false,
    type: "single",
    selections: [],
    resolve: null
  });
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: true
  });

  const { peopleCount, projectsPerYear, yearsCovered, isFullscreen, maxRecordsPerPage } = values;

  const [mockedData, setMockedData] = useState(() => createDemoData());

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });
  const [displayActiveUnitsMode, setDisplayActiveUnitsMode] = useState(false);
  const [resourceOnlyMode, setResourceOnlyMode] = useState(true);
  const [groupingMode, setGroupingMode] = useState<"categories" | "capacity" | "none">("categories");

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    setRange(range);
  }, []);

  const filteredData = useMemo(() => {
    const data = mockedData.map((person) => ({
      ...person,
      // Strip categoryId when grouping is "none" so auto-grouping doesn't kick in
      ...(groupingMode === "none" ? { categoryId: undefined, capacity: undefined } : {}),
      data: person.data.filter(
        (project) =>
          dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
          dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
          (dayjs(project.startDate).isBefore(range.startDate, "day") &&
            dayjs(project.endDate).isAfter(range.endDate, "day"))
      )
    }));

    if (displayActiveUnitsMode) {
      return data.filter((person) => person.data.length > 0);
    }
    return data;
  }, [mockedData, range.endDate, range.startDate, displayActiveUnitsMode, groupingMode]);

  const activeCategories = groupingMode === "categories" ? mockCategories : undefined;

  const handleToggleDisplayActiveUnits = () => {
    setDisplayActiveUnitsMode((prev) => !prev);
  };

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  /**
   * Called when user makes a single selection on the calendar.
   * Consumer decides: accept single event OR enable multi-select mode.
   */
  const handleTimeRangeSelect = useCallback((selectionData: any) => {
    console.log("📅 Time range selected:", {
      startDate: selectionData.startDate.toLocaleString(),
      endDate: selectionData.endDate.toLocaleString(),
      resourceId: selectionData.resourceId,
      resourceLabel: selectionData.resourceLabel,
      hasConflict: selectionData.hasConflict
    });

    // Show dialog and let user decide
    return new Promise<{ continueMultiSelect: boolean }>((resolve) => {
      setDialog({
        isOpen: true,
        type: "single",
        selections: [selectionData],
        resolve
      });
    });
  }, []);

  /**
   * Called when user clicks "Confirm" in multi-select toolbar.
   * Consumer receives ALL pending selections and decides: accept them OR add more.
   * If adding more, all selections stay visible on the calendar.
   */
  const handleMultiTimeRangeSelect = useCallback((selections: any[]) => {
    console.log(`📅 Reviewing ${selections.length} selection(s)`);

    // Show dialog and let user decide
    return new Promise<{ continueMultiSelect: boolean }>((resolve) => {
      setDialog({
        isOpen: true,
        type: "multi",
        selections,
        resolve
      });
    });
  }, []);

  // Dialog handlers
  const handleDialogAddMore = useCallback(() => {
    console.log("📅 User chose: Add more events");
    if (dialog.resolve) {
      dialog.resolve({ continueMultiSelect: true });
    }
    setDialog((prev) => ({ ...prev, isOpen: false, resolve: null }));
  }, [dialog.resolve]);

  const handleDialogAccept = useCallback(() => {
    const count = dialog.selections.length;
    console.log(`📅 User chose: Accept ${count} event(s)`);
    
    // Log accepted events
    dialog.selections.forEach((sel, i) => {
      console.log(`  ${i + 1}. ${sel.resourceLabel.title}: ${sel.startDate.toLocaleDateString()}`);
    });

    if (dialog.resolve) {
      dialog.resolve({ continueMultiSelect: false });
    }
    setDialog((prev) => ({ ...prev, isOpen: false, resolve: null }));
  }, [dialog.resolve, dialog.selections]);

  const handleEventDrop = useCallback(async (dropData: any) => {
    console.log("🚀 Event dropped:", {
      event: dropData.event.title,
      passengers: dropData.event.totalPassengers,
      from: dropData.originalResourceId,
      to: dropData.newResourceId,
      originalDates: { start: dropData.originalStartDate, end: dropData.originalEndDate },
      newDates: { start: dropData.newStartDate, end: dropData.newEndDate },
      capacity: mockedData.find((r) => r.id === dropData.newResourceId)?.capacity,
      hasConflict: dropData.hasConflict
    });

    // Show detailed conflict information
    if (dropData.hasConflict && dropData.conflicts) {
      console.warn(`⚠️ WARNING: ${dropData.conflicts.length} conflict(s) detected:`);
      dropData.conflicts.forEach((conflict: any, index: number) => {
        const overlapHours = (conflict.overlapDuration / (1000 * 60 * 60)).toFixed(2);
        console.warn(`  ${index + 1}. Conflicts with "${conflict.event.title}"`);
        console.warn(`     - Overlap period: ${conflict.conflictStart.toLocaleString()} to ${conflict.conflictEnd.toLocaleString()}`);
        console.warn(`     - Overlap duration: ${overlapHours} hours`);
        console.warn(`     - Dragged event: ${dropData.newStartDate.toLocaleString()} to ${dropData.newEndDate.toLocaleString()}`);
        console.warn(`     - Existing event: ${conflict.event.startDate.toLocaleString()} to ${conflict.event.endDate.toLocaleString()}`);
      });
    }

    // Check if anything actually changed
    const resourceChanged = dropData.originalResourceId !== dropData.newResourceId;
    const datesChanged =
      dropData.originalStartDate.getTime() !== dropData.newStartDate.getTime() ||
      dropData.originalEndDate.getTime() !== dropData.newEndDate.getTime();

    // If nothing changed, don't update state
    if (!resourceChanged && !datesChanged) {
      console.log("📍 No changes detected, keeping event in place");
      return true; // Accept but don't modify
    }
    
    // Update the mocked data
    setMockedData((prevData) => {
      return prevData.map((resource) => {
        // If resource changed, handle remove and add separately
        if (resourceChanged) {
          // Remove from original resource
          if (resource.id === dropData.originalResourceId) {
            return {
              ...resource,
              data: resource.data.filter((event) => event.segmentId !== dropData.event.segmentId)
            };
          }
          // Add to new resource
          if (resource.id === dropData.newResourceId) {
            return {
              ...resource,
              data: [
                ...resource.data,
                {
                  ...dropData.event,
                  startDate: dropData.newStartDate,
                  endDate: dropData.newEndDate
                }
              ]
            };
          }
        } else {
          // Same resource, just update dates
          if (resource.id === dropData.originalResourceId) {
            return {
              ...resource,
              data: resource.data.map((event) =>
                event.segmentId === dropData.event.segmentId
                  ? {
                      ...event,
                      startDate: dropData.newStartDate,
                      endDate: dropData.newEndDate
                    }
                  : event
              )
            };
          }
        }
        return resource;
      });
    });
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    return true; // Accept the drop
  }, [mockedData]);

  const handleEventDrag = useCallback((dragData: any) => {
    if (dragData.conflicts && dragData.conflicts.length > 0) {
      const conflictSummary = dragData.conflicts
        .map((c: any) => {
          const hours = (c.overlapDuration / (1000 * 60 * 60)).toFixed(1);
          return `${c.event.title} (${hours}h overlap)`;
        })
        .join(", ");
      console.log(`🔄 Dragging "${dragData.event.title}" - Conflicts: ${conflictSummary}`);
    }
  }, []);

  // Check for time conflicts
  const checkConflict = useCallback(
    (dragData: any) => {
      const targetResource = mockedData.find((r) => r.id === dragData.currentResourceId);
      if (!targetResource) return false;

      // Check all events in the target resource for overlaps
      for (const event of targetResource.data) {
        // Skip the event being dragged
        if (event.segmentId === dragData.event.segmentId) continue;

        const dragStart = new Date(dragData.currentStartDate).getTime();
        const dragEnd = new Date(dragData.currentEndDate).getTime();
        const eventStart = new Date(event.startDate).getTime();
        const eventEnd = new Date(event.endDate).getTime();

        // Check for overlap
        if (
          (dragStart >= eventStart && dragStart < eventEnd) ||
          (dragEnd > eventStart && dragEnd <= eventEnd) ||
          (dragStart <= eventStart && dragEnd >= eventEnd)
        ) {
          console.log("❌ Conflict detected with:", event.title);
          return true; // Has conflict
        }
      }

      return false; // No conflict
    },
    [mockedData]
  );

  return (
    <>
      <ConfigPanel values={values} onSubmit={setValues} />
      <div style={{ padding: "10px", background: "#f0f0f0", borderBottom: "1px solid #ccc", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={resourceOnlyMode}
            onChange={(e) => setResourceOnlyMode(e.target.checked)}
          />
          <span>Resource-Only Mode (drag only changes resource, not dates)</span>
        </label>
        <span style={{ color: "#666", fontSize: "12px" }}>
          Click-to-Add: Click on calendar → choose single or multi-select
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", color: "#333", fontWeight: 500 }}>Grouping:</span>
          {(["categories", "capacity", "none"] as const).map((mode) => (
            <label key={mode} style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", fontSize: "12px" }}>
              <input
                type="radio"
                name="groupingMode"
                checked={groupingMode === mode}
                onChange={() => setGroupingMode(mode)}
              />
              {mode === "categories" ? "By Category" : mode === "capacity" ? "By Capacity (auto)" : "None"}
            </label>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="date"
            value={jumpDate}
            onChange={(e) => setJumpDate(e.target.value)}
            style={{ padding: "4px 8px" }}
          />
          <button
            onClick={() => jumpDate && schedulerRef.current?.goToDate(jumpDate)}
            disabled={!jumpDate}
            style={{ padding: "4px 12px", cursor: jumpDate ? "pointer" : "not-allowed" }}
          >
            Jump to Date
          </button>
          <button
            onClick={() => schedulerRef.current?.goToToday()}
            style={{ padding: "4px 12px", cursor: "pointer" }}
          >
            Today
          </button>
        </div>
      </div>
      {isFullscreen ? (
        <Scheduler
          ref={schedulerRef}
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          data={filteredData}
          categories={activeCategories}
          isLoading={false}
          onTileClick={handleTileClick}
          handleToggleDisplayActiveUnits={handleToggleDisplayActiveUnits}
          config={{ zoom: 0, maxRecordsPerPage: maxRecordsPerPage, showThemeToggle: true }}
          onItemClick={(data) => console.log("clicked: ", data)}
          onEventDrop={handleEventDrop}
          onEventDrag={handleEventDrag}
          draggableConfig={{
            enabled: true,
            resourceOnly: resourceOnlyMode,
            isValidDrop: (dragData) => !checkConflict(dragData)
          }}
          onTimeRangeSelect={handleTimeRangeSelect}
          onMultiTimeRangeSelect={handleMultiTimeRangeSelect}
          clickToAddConfig={{ enabled: true }}
        />
      ) : (
        <StyledSchedulerFrame>
          <Scheduler
            ref={schedulerRef}
            startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
            onRangeChange={handleRangeChange}
            isLoading={false}
            data={filteredData}
            categories={activeCategories}
            onTileClick={handleTileClick}
            handleToggleDisplayActiveUnits={handleToggleDisplayActiveUnits}
            onItemClick={(data) => console.log("clicked: ", data)}
            onEventDrop={handleEventDrop}
            onEventDrag={handleEventDrag}
            draggableConfig={{
              enabled: true,
              resourceOnly: resourceOnlyMode,
              isValidDrop: (dragData) => !checkConflict(dragData)
            }}
            onTimeRangeSelect={handleTimeRangeSelect}
            onMultiTimeRangeSelect={handleMultiTimeRangeSelect}
            clickToAddConfig={{ enabled: true }}
          />
        </StyledSchedulerFrame>
      )}

      {/* Selection Decision Dialog */}
      {dialog.isOpen && (
        <DialogOverlay>
          <DialogBox>
            <DialogTitle>
              {dialog.type === "single" ? "📅 New Selection" : `📋 ${dialog.selections.length} Selection(s)`}
            </DialogTitle>
            <DialogContent>
              <SelectionList>
                {dialog.selections.map((sel, i) => (
                  <SelectionItem key={i} $hasConflict={sel.hasConflict}>
                    <strong>{sel.resourceLabel.title}</strong>
                    <br />
                    {sel.startDate.toLocaleDateString()} - {sel.endDate.toLocaleDateString()}
                    {sel.hasConflict && <ConflictBadge>⚠️ Conflict</ConflictBadge>}
                  </SelectionItem>
                ))}
              </SelectionList>
              <p style={{ margin: "16px 0 0 0", color: "#666", fontSize: "13px" }}>
                What would you like to do?
              </p>
            </DialogContent>
            <DialogButtons>
              <DialogButton onClick={handleDialogAddMore}>
                ➕ Add More Events
              </DialogButton>
              <DialogButton $primary onClick={handleDialogAccept}>
                ✓ Accept {dialog.selections.length === 1 ? "Event" : "All Events"}
              </DialogButton>
            </DialogButtons>
          </DialogBox>
        </DialogOverlay>
      )}
    </>
  );
}

export default App;
