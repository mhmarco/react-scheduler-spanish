import styled from "styled-components";
import { headerHeight, leftColumnWidth } from "@/constants";

export const StyledOuterWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

// Topbar + Legend are pinned to the visible viewport (sticky left, viewport-minus-left-column width) so they stay in
// view while the canvas header/grid scroll horizontally. This is what lets the toolbar's centred ‹ Hoy › sit in the
// middle of the visible board rather than the middle of the full scrollable canvas.
export const StyledPinned = styled.div<{ $width: number }>`
  position: sticky;
  left: ${leftColumnWidth}px;
  width: calc(${({ $width }) => $width}px - ${leftColumnWidth}px);
  z-index: 3;
`;

export const StyledWrapper = styled.div`
  height: ${headerHeight}px;
  display: block;
`;

export const StyledCanvas = styled.canvas``;
