import styled from "styled-components";
import { tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps, StyledTileWrapperProps } from "./types";

// --- Kept: consumed by other components (DragOverlay, Tooltip, …) ---
export const StyledTextWrapper = styled.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
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

// --- Tile chrome, matched pixel-for-pixel to the locked mockup (artifact 91ed97bb .tile/.nt/…) ---

export const StyledTileWrapper = styled.button<StyledTileWrapperProps>`
  ${marginPaddingReset}
  position: absolute;
  height: ${tileHeight}px;
  border-radius: 7px;
  overflow: hidden;
  outline: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 5px -1px rgba(12, 26, 23, 0.28), 0 0 0 0.5px rgba(12, 26, 23, 0.14);
  cursor: ${({ isDraggable, isDragging }) => {
    if (!isDraggable) return "not-allowed";
    if (isDragging) return "grabbing";
    return "grab";
  }};
  opacity: ${({ isDragging }) => (isDragging ? 0.3 : 1)};
  transition: opacity 0.2s ease;
  ${({ $unconfirmed }) =>
    $unconfirmed &&
    `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
`;

// 4px left readiness stripe (in-house state / subcontract confirmed-unconfirmed). Colour set inline.
export const StyledRStripe = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`;

// Standard tile body: two stacked rows (title row + meta row).
export const StyledNt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`;

export const StyledNtRow = styled.div<{ $pad?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({ $pad }) => $pad && "padding-right: 24px;"}
`;

export const StyledNtIco = styled.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`;

export const StyledNtTitle = styled.span`
  ${truncate}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`;

export const StyledNtClient = styled.span`
  ${truncate}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`;

// CRF-#### booking chip (.nt-bk) — consistent on every tile incl. subcontract.
export const StyledNtBk = styled.span`
  flex: none;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  margin-right: 5px;
  white-space: nowrap;
`;

// Driver meta line: person icon + name.
export const StyledNtMeta = styled.div`
  ${truncate}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    opacity: 0.9;
  }
`;

// Top-right cluster: SUB pill (subcontract) and/or a white dot-wrap with a coloured status icon (in-house).
export const StyledTileTR = styled.div<{ $sm?: boolean }>`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({ $sm }) => ($sm ? "3px" : "5px")};
  right: ${({ $sm }) => ($sm ? "3px" : "6px")};
`;

export const StyledDotWrap = styled.span<{ $sm?: boolean }>`
  width: ${({ $sm }) => ($sm ? "14px" : "16px")};
  height: ${({ $sm }) => ($sm ? "14px" : "16px")};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  display: grid;
  place-items: center;
  flex: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  & svg {
    width: ${({ $sm }) => ($sm ? "9px" : "11px")};
    height: ${({ $sm }) => ($sm ? "9px" : "11px")};
  }
`;

export const StyledSubPill = styled.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

// One-day tile (.nt.xs.two): type icon over start/end time chips + corner status dot.
export const StyledNtXs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 3px 2px;
  position: relative;
  & svg {
    width: 12px;
    height: 12px;
    color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));
  }
`;

export const StyledXsTime = styled.span<{ $end?: boolean }>`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({ $end }) => ($end ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)")};
  color: ${({ $end }) => ($end ? "#3A4C46" : "#183D3D")};
`;

export const StyledXsCorner = styled.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`;
