import styled from "styled-components";
import { tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps, StyledTileWrapperProps } from "./types";

export const StyledTileWrapper = styled.button<StyledTileWrapperProps>`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  outline: none;
  border: ${({ $dashed }) => ($dashed ? "1.5px dashed rgba(255, 255, 255, 0.75)" : "none")};
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

// --- Redesigned adaptive tile chrome (width-bucketed; plan §4/§22.6) ---

// Type glyph (sun = 1-day gira, ⇄ = transfer, multi-day gira). Legible on any bgColor via inherited color.
export const StyledTileIcon = styled.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`;

// 3px left readiness stripe (in-house: driver readiness; subcontract: confirmed/unconfirmed). Color set inline.
export const StyledReadinessStripe = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
`;

// Top-right cluster: a SUB pill (subcontract) OR a readiness/ack dot (in-house) — §22.2.
export const StyledTileTR = styled.div`
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  pointer-events: none;
`;

export const StyledSubPill = styled.span`
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1;
  padding: 2px 3px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`;

// In-house ack indicator: an icon-in-circle (§22.2) — a per-state glyph so the four states read without relying
// on colour alone (the left stripe carries the colour redundantly).
export const StyledAckDot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.9);
`;

// XS one-day: icon over start/end times, centred.
export const StyledOneDayStack = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`;

export const StyledTimes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`;

// Multi-day: icon + a flex text column with TRUE ellipsis (no sticky fade-mask clip).
export const StyledTileBody = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`;

export const StyledTileLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`;

export const StyledLine = styled.span<{ bold?: boolean }>`
  ${truncate}
  font-size: ${({ bold }) => (bold ? "11px" : "9px")};
  font-weight: ${({ bold }) => (bold ? "700" : "500")};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({ bold }) => (bold ? 1 : 0.9)};
`;

// Booking-number chip (§22.2 .nt-bk) — the consistent CRF-#### identifier, shown on every tile incl. subcontract.
export const StyledBookingChip = styled.span`
  display: inline-block;
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1;
  padding: 2px 4px;
  margin-right: 4px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.16);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  vertical-align: middle;
`;

