import styled from "styled-components";
import { StyledSpanProps } from "./types";

export const StyledWrapper = styled.div`
  height: calc(100vh - headerHeight);
  position: relative;
`;

export const StyledInnerWrapper = styled.div`
  position: relative;
`;

export const StyledCanvas = styled.canvas``;
export const StyledCanvasHeader = styled.canvas``;

// A snapshot of the previous grid, overlaid on the main canvas and faded out when rows change (unit add/remove) so
// the grid BACKGROUND cross-fades to its new layout instead of snapping. Compositor-only (one opacity animation on a
// bitmap) — no per-frame redraw. Sits above the main canvas (DOM order) but below TodayColumn/Tiles.
export const StyledGhostCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`;

export const StyledSpan = styled.span<StyledSpanProps>`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position }) => (position === "left" ? 0 : "auto")};
  right: ${({ position }) => (position === "right" ? 0 : "auto")};
`;
