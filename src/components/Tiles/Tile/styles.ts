import styled from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps, StyledTileWrapperProps } from "./types";

export const StyledTileWrapper = styled.button<StyledTileWrapperProps>`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  cursor: ${({ isDraggable, isDragging }) => {
    if (!isDraggable) return "not-allowed";
    if (isDragging) return "grabbing";
    return "grab";
  }};
  opacity: ${({ isDragging }) => (isDragging ? 0.3 : 1)};
  transition: opacity 0.2s ease;
`;

// Standard wrapper for multi-day events
export const StyledTextWrapper = styled.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;

// Compact wrapper for single-day events
export const StyledOneDayWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

// Clean label for single-day events
export const StyledOneDayLabel = styled.span<{ $type: "tour" | "transfer" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  color: ${({ $type }) => ($type === "tour" ? "#374151" : "#374151")};
  font-size: 9px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 3px;
  letter-spacing: 0.3px;
  line-height: 1;
  border-left: 2px solid ${({ $type }) => ($type === "tour" ? "#10b981" : "#3b82f6")};
  white-space: nowrap;
`;

export const StyledText = styled.p<StyledTextProps>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;

export const StyledOneDayText = styled.span`
  ${truncate}
  font-size: 10px;
  font-weight: 600;
  min-width: 0;
  flex: 1;
`;

export const StyledOneDayBadge = styled.span<{ $type: "tour" | "transfer" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: ${({ $type }) => ($type === "tour" ? "#15803d" : "#1d4ed8")};
  font-size: 9px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;

export const StyledBadgeIcon = styled.span`
  font-size: 10px;
  line-height: 1;
`;

export const StyledTileContent = styled.div`
  display: flex;
  overflow: hidden;
  min-width: 0;
`;
