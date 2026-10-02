import { FC } from "react";
import { StyledGroupHeader, StyledLabel, StyledCount, StyledStatusCount, StyledChevron } from "./styles";
import { GroupHeaderProps } from "./types";

const GroupHeader: FC<GroupHeaderProps> = ({
  label,
  count,
  isCollapsed,
  onToggle,
  variant = "category"
}) => {
  const tone = variant === "unassigned" ? (count === 0 ? "ok" : "warning") : undefined;
  return (
    <StyledGroupHeader $variant={variant} $tone={tone} onClick={onToggle} title={label}>
      <StyledChevron $collapsed={isCollapsed}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledChevron>
      <StyledLabel $variant={variant} $tone={tone}>{label}</StyledLabel>
      {tone ? (
        <StyledStatusCount $tone={tone}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            {tone === "ok" ? (
              <path
                d="M2.5 6.5L5 9L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path d="M6 1.5L11 10.5H1L6 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M6 5V7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="6" cy="8.9" r="0.75" fill="currentColor" />
              </>
            )}
          </svg>
          {count}
        </StyledStatusCount>
      ) : (
        <StyledCount $variant={variant}>{count}</StyledCount>
      )}
    </StyledGroupHeader>
  );
};

export default GroupHeader;
