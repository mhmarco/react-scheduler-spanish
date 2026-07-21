import styled from "styled-components";
import { headerHeight } from "@/constants";

export const StyledOuterWrapper = styled.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`;

// Topbar + Legend span the full visible viewport width and are pinned (sticky left) so they stay in view while the
// canvas header/grid scroll horizontally. Full-width — NOT offset by the left column — so the 2-group toolbar's nav
// sits flush at the far left (matching the mockup); the old left-column offset only made sense for the retired
// centred-‹ Hoy › layout and left a blank gap above the unit-label column.
export const StyledPinned = styled.div<{ $width: number }>`
  position: sticky;
  left: 0;
  width: ${({ $width }) => $width}px;
  z-index: 3;
`;

export const StyledWrapper = styled.div`
  height: ${headerHeight}px;
  display: block;
`;

export const StyledCanvas = styled.canvas``;
