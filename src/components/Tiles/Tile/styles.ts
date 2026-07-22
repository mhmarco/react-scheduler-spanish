import styled, { css, keyframes } from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";
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

const tileIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`;

// Exit is a keyframe, NOT a transition: tiles are frequently remounted (fresh nodes), so a transition from opacity 1
// never fires — it paints 0 from birth and jumps. A keyframe always plays from its `from` state, so it fades whether
// the node is preserved or remounted (drives the collapse fade-then-snap and the plain remove-a-tile exit).
const tileOut = keyframes`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`;

export const StyledTileWrapper = styled.button<StyledTileWrapperProps>`
  ${marginPaddingReset}
  position: absolute;
  height: ${tileHeight}px;
  border-radius: 7px;
  /* NO overflow:hidden — it would make the tile the sticky scroll-container and break the floating text (the multi-day
     body sticks to the visible-left as a wide event scrolls). The rounded bg still clips the hatch; the stripe rounds
     its own left corners to sit inside the radius. */
  /* Isolate so the stripe (z 3) and top-right cluster (z 6) stay contained in the tile instead of escaping to the
     grid level and painting OVER the sticky day-header on vertical scroll. */
  isolation: isolate;
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
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in, fade a removed one out, and a subtle lift
     on hover. Only transform/opacity/box-shadow are transitioned — NOT top: transitioning top animated a LAYOUT
     property on every displaced tile on unit add/remove (reflow+paint per frame across many nodes = the reported
     lag), and it made the tiles glide while the canvas grid lane snaps. Tiles now snap to their new row in lockstep
     with the canvas; the enter/exit fades + the left-column rowIn carry the motion. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${tileIn} 180ms ease-out;
    transition: opacity 0.2s ease, transform 160ms ease, box-shadow 160ms ease;
    &:hover:not(:active) {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 13px -3px rgba(12, 26, 23, 0.42), 0 0 0 0.5px rgba(12, 26, 23, 0.16);
    }
  }
  ${({ $unconfirmed }) =>
    $unconfirmed &&
    `background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);
     @media (prefers-reduced-motion: no-preference) {
       &:hover:not(:active) { box-shadow: 0 0 0 1.5px #D98A22, 0 6px 13px -3px rgba(12,26,23,0.42); }
     }`}
  ${({ $exiting }) =>
    $exiting &&
    css`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${tileOut} 190ms ease-out forwards;
      }
    `}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({ $highlighted }) =>
    $highlighted &&
    `z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({ $dimmed }) => $dimmed && "opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({ $leaving }) =>
    $leaving &&
    "opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`;

// 4px left readiness stripe (in-house state / subcontract confirmed-unconfirmed). Colour set inline.
export const StyledRStripe = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`;

// Standard tile body: two stacked rows (title row + meta row). Sticky-left so the text floats at the visible-left of a
// wide multi-day event as it scrolls (restores the original StyledStickyWrapper behavior). fit-content + max-width give
// it room to shift left within the tile while still truncating on narrow tiles; requires no overflow:hidden ancestor.
export const StyledNt = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`;

export const StyledNtRow = styled.div<{ $pad?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
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

// Booking number — LEAST important (priority: service > client > driver > booking). Faint, tiny, tucked into the
// tile's bottom-right corner (absolute on the tile, not the floating body, so it just scrolls off with the tile).
export const StyledNtBkCorner = styled.span`
  position: absolute;
  bottom: 3px;
  right: 8px;
  z-index: 4;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.62);
  white-space: nowrap;
  pointer-events: none;
`;

// Driver meta line: person icon + name. Right padding clears the corner booking on narrow tiles.
export const StyledNtMeta = styled.div`
  ${truncate}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  padding-right: 46px;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  line-height: 1.1;
  & svg {
    width: 10px;
    height: 10px;
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
  color: ${({ theme }) => theme.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

// One-day tile (.nt.xs.two): type icon over start/end time chips + corner status dot. The transfer glyph is the hero
// element on a transfer tile (only one time chip below it), so it renders larger than the one-day-tour sun icon.
export const StyledNtXs = styled.div<{ $transfer?: boolean }>`
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
    width: ${({ $transfer }) => ($transfer ? "18px" : "12px")};
    height: ${({ $transfer }) => ($transfer ? "18px" : "12px")};
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
  letter-spacing: -0.02em;
  white-space: nowrap;
  text-align: center;
  max-width: 100%;
  background: ${({ $end }) => ($end ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.95)")};
  color: ${({ $end }) => ($end ? "#3A4C46" : "#183D3D")};
`;

// --- Focus-mode ghost preview tile + the "Sub" leave-tag on vacating blockers ---

const ghostRise = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`;

// The translucent-green landing preview. Positioned (left/top/width) like a real tile; non-interactive; overflow
// visible so the "entra a …" badge can hang below.
export const StyledGhostTile = styled.div`
  position: absolute;
  height: ${tileHeight}px;
  border-radius: 7px;
  /* A clearly-green "this is the event that lands here" preview — nearly opaque so it doesn't muddy over the dark
     blocker underneath; the dashed light border + the "entra a…" badge keep it reading as a preview, not a real tile. */
  background: rgba(21, 133, 97, 0.74);
  border: 2px dashed rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 3px rgba(15, 125, 102, 0.28), 0 3px 9px -2px rgba(12, 26, 23, 0.4);
  pointer-events: none;
  z-index: 8;
  overflow: visible;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${ghostRise} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`;

export const StyledGhostBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`;

export const StyledGhostTitle = styled.div`
  ${truncate}
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  line-height: 1.15;
  & svg {
    width: 14px;
    height: 14px;
    flex: none;
    color: #fff;
  }
`;

export const StyledGhostCap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.1;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    color: #fff;
  }
`;

export const StyledGhostBadge = styled.span`
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #2e8b63;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 2px 8px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.22);
  z-index: 9;
`;

export const StyledLeaveTag = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #d98a22;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 1px 7px;
  z-index: 8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;
