import { FC } from "react";
import { StyledGroupHeader, StyledLabel, StyledCount, StyledChevron } from "./styles";
import { GroupHeaderProps } from "./types";

const GroupHeader: FC<GroupHeaderProps> = ({
  label,
  count,
  isCollapsed,
  onToggle,
  variant = "category"
}) => {
  return (
    <StyledGroupHeader $variant={variant} onClick={onToggle} title={label}>
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
      <StyledLabel $variant={variant}>{label}</StyledLabel>
      <StyledCount $variant={variant}>{count}</StyledCount>
    </StyledGroupHeader>
  );
};

export default GroupHeader;
