import { FC, useState } from "react";
import { useLanguage } from "@/context/LocaleProvider";
import { SchedulerCategory } from "@/types/global";
import Icon from "../Icon";
import PaginationButton from "../PaginationButton/PaginationButton";
import {
  StyledInput,
  StyledInputWrapper,
  StyledLeftColumnHeader,
  StyledWrapper,
  StyledHeaderActions,
  StyledCollapseButton
} from "./styles";
import { LeftColumnProps } from "./types";
import LeftColumnItem from "./LeftColumnItem/LeftColumnItem";
import GroupHeader from "./GroupHeader";

const LeftColumn: FC<LeftColumnProps> = ({
  data,
  categories,
  headerHeight,
  rows,
  onLoadNext,
  onLoadPrevious,
  pageNum,
  pagesAmount,
  searchInputValue,
  onSearchInputChange,
  onItemClick,
  collapsedGroups,
  onToggleGroup,
  allGroupIds,
  onExpandAll,
  onCollapseAll
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const lang = useLanguage();

  const toggleFocus = () => setIsInputFocused((prev) => !prev);

  const sortedCategories = categories
    ? [...categories].sort((a, b) => a.maxPassengers - b.maxPassengers)
    : [];
  const hasCategoryHeaders = sortedCategories.length > 0;
  const hasCollapsibleGroups = allGroupIds.length > 0;
  const allCollapsed = hasCollapsibleGroups && collapsedGroups.size === allGroupIds.length;
  const allExpanded = hasCollapsibleGroups && collapsedGroups.size === 0;

  const subcontractUnits = data.filter((item) => item.isSubcontract);
  const subcontractLabel = lang.subcontract ?? "Subcontract";

  const renderItem = (item: (typeof data)[number]) => {
    const idx = data.indexOf(item);
    return (
      <LeftColumnItem
        id={item.id}
        item={item.label}
        key={item.id}
        rows={rows[idx]}
        onItemClick={onItemClick}
        isSubcontract={item.isSubcontract}
      />
    );
  };

  const renderCategoryGroup = (cat: SchedulerCategory) => {
    const items = data.filter(
      (item) => !item.isSubcontract && item.categoryId === cat.id
    );
    if (items.length === 0) return null;
    const isCollapsed = collapsedGroups.has(cat.id);
    const label = cat.name;
    return (
      <div key={cat.id}>
        <GroupHeader
          label={label}
          count={items.length}
          isCollapsed={isCollapsed}
          onToggle={() => onToggleGroup(cat.id)}
          variant="category"
        />
        {!isCollapsed && items.map(renderItem)}
      </div>
    );
  };

  const uncategorized = data.filter(
    (item) => !item.isSubcontract && (!item.categoryId || !hasCategoryHeaders)
  );

  return (
    <StyledWrapper>
      <StyledLeftColumnHeader $height={headerHeight}>
        <StyledHeaderActions>
          <StyledInputWrapper isFocused={isInputFocused}>
            <StyledInput
              placeholder={lang.search}
              value={searchInputValue}
              onChange={onSearchInputChange}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
            />
            <Icon iconName="search" />
          </StyledInputWrapper>
          {hasCollapsibleGroups && (
            <StyledCollapseButton
              title={allCollapsed ? "Expand all" : "Collapse all"}
              onClick={allCollapsed ? onExpandAll : onCollapseAll}
              $allCollapsed={allCollapsed}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {allCollapsed ? (
                  <>
                    <path d="M4 6.5L8 3L12 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 13L8 9.5L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                ) : (
                  <>
                    <path d="M4 3L8 6.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 9.5L8 13L12 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                )}
              </svg>
            </StyledCollapseButton>
          )}
        </StyledHeaderActions>
        <PaginationButton
          intent="previous"
          isVisible={pageNum !== 0}
          onClick={onLoadPrevious}
          icon={<Icon iconName="arrowUp" width="16" height="16" />}
          pageNum={pageNum}
          pagesAmount={pagesAmount}
        />
      </StyledLeftColumnHeader>
      {hasCategoryHeaders
        ? sortedCategories.map(renderCategoryGroup)
        : uncategorized.map(renderItem)}
      {hasCategoryHeaders && uncategorized.length > 0 && uncategorized.map(renderItem)}
      {subcontractUnits.length > 0 && (
        <>
          <GroupHeader
            label={subcontractLabel}
            count={subcontractUnits.length}
            isCollapsed={collapsedGroups.has("__subcontract__")}
            onToggle={() => onToggleGroup("__subcontract__")}
            variant="subcontract"
          />
          {!collapsedGroups.has("__subcontract__") && subcontractUnits.map(renderItem)}
        </>
      )}
      <PaginationButton
        intent="next"
        isVisible={pageNum !== pagesAmount - 1}
        onClick={onLoadNext}
        icon={<Icon iconName="arrowDown" width="16" height="16" />}
        pageNum={pageNum}
        pagesAmount={pagesAmount}
      />
    </StyledWrapper>
  );
};

export default LeftColumn;
