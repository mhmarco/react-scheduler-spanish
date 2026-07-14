import styled from "styled-components";
import { tileHeight, leftColumnWidth } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";

export const StyledOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`;

export const StyledGhostElement = styled.div<{
  $isAnimating: boolean;
  $animateToX?: number;
  $animateToY?: number;
}>`
  position: absolute;
  height: ${tileHeight}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({ $isAnimating }) =>
    $isAnimating ? "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"};

  ${({ $isAnimating, $animateToX, $animateToY }) =>
    $isAnimating && $animateToX !== undefined && $animateToY !== undefined
      ? `transform: translate3d(${$animateToX}px, ${$animateToY}px, 0);`
      : ""}
`;

export const StyledGhostTextWrapper = styled.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;

export const StyledGhostText = styled.p<{ $bold?: boolean }>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  font-weight: ${({ $bold }) => ($bold ? "600" : "400")};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;

export const StyledGhostDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledGhostStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;

export const StyledDropIndicator = styled.div<{ $isValid: boolean; $hasConflict?: boolean }>`
  position: absolute;
  height: ${tileHeight}px;
  border-radius: 4px;
  border: 3px dashed ${({ $isValid, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "#757575"; // Dark gray for capacity issues (blocked)
    if ($hasConflict) return "#F44336"; // Red for conflicts (warning)
    return "#4CAF50"; // Green for valid
  }};
  background-color: ${({ $isValid, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "rgba(117, 117, 117, 0.4)"; // Dark gray for capacity issues
    if ($hasConflict) return "rgba(244, 67, 54, 0.4)"; // Red for conflicts
    return "rgba(76, 175, 80, 0.4)"; // Green for valid
  }};
  pointer-events: none;
`;

export const StyledDropTimeLabel = styled.div<{ $isValid: boolean; $hasConflict?: boolean }>`
  position: absolute;
  top: -24px;
  left: 0;
  padding: 4px 8px;
  background-color: ${({ $isValid, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "#757575"; // Dark gray for capacity issues
    if ($hasConflict) return "#F44336"; // Red for conflicts
    return "#4CAF50"; // Green for valid
  }};
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`;

export const StyledResourceHighlight = styled.div<{ $isValid?: boolean; $hasConflict?: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ $isValid = true, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "rgba(117, 117, 117, 0.4)"; // Dark gray for capacity issues
    if ($hasConflict) return "rgba(244, 67, 54, 0.4)"; // Red for conflicts
    return "rgba(76, 175, 80, 0.4)"; // Green for valid
  }};
  pointer-events: none;
`;

export const StyledInvalidResourceOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`;

export const StyledResourceOnlyIndicator = styled.div<{ $isValid: boolean; $hasConflict?: boolean }>`
  position: absolute;
  width: 6px;
  background-color: ${({ $isValid, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "#757575"; // Dark gray for capacity issues
    if ($hasConflict) return "#F44336"; // Red for conflicts
    return "#4CAF50"; // Green for valid
  }};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({ $isValid, $hasConflict }) => {
    // Priority: Capacity check first, then conflict check
    if (!$isValid) return "rgba(117, 117, 117, 0.8)";
    if ($hasConflict) return "rgba(244, 67, 54, 0.8)";
    return "rgba(76, 175, 80, 0.8)";
  }};
`;

export const StyledConflictTooltip = styled.div`
  position: absolute;
  background-color: #fff;
  border: 2px solid #F44336;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  z-index: 1001;
  min-width: 280px;
  max-width: 400px;
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledConflictHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`;

export const StyledConflictIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #F44336;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

export const StyledConflictList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledConflictItem = styled.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`;

export const StyledConflictEventTitle = styled.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`;

export const StyledConflictDetail = styled.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`;

export const StyledConflictDuration = styled.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`;
