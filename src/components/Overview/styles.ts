import styled from "styled-components";
import { fontFamily, overviewHeight } from "@/constants";

// Full-year navigator ribbon, translated from the locked mockup (artifact 91ed97bb `.overview`). Rendered as a
// full-width footer pinned to the bottom of the scroll container (the board reserves `overviewHeight` above it).
// Fixed mockup hexes where the component theme has no matching token; HOY/window use the `today` token.
export const StyledOverview = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${overviewHeight}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${fontFamily};
`;

// Caption hugs the track (auto width, per the mockup) — the year track has no meaningful column alignment with the
// month board, so a fixed board-aligned width would just leave the label floating.
export const StyledCap = styled.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`;

export const StyledTrack = styled.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledMonths = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  border-bottom: 1px solid #e0e8e3;
  & > span {
    position: absolute;
    top: 3.5px;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: #74897f;
    padding-left: 5px;
  }
`;

export const StyledMTick = styled.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`;

export const StyledBars = styled.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

// Colour (green volume ramp / grey) is set inline per bar by the Overview.
export const StyledBar = styled.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`;

export const StyledHoy = styled.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.colors.today};
  z-index: 2;
  pointer-events: none;
  & > span {
    position: absolute;
    top: -14.5px;
    left: 0;
    transform: translateX(-2px);
    font-size: 7.5px;
    font-weight: 800;
    color: #fff;
    background: ${({ theme }) => theme.colors.today};
    padding: 0 3px;
    border-radius: 3px;
    letter-spacing: 0.03em;
  }
`;

export const StyledWin = styled.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({ theme }) => theme.colors.today};
  border-radius: 6px;
  pointer-events: none;
`;

// Hover preview: a dashed, translucent-neutral window showing the range a click would load. Distinct from the solid
// green current-window so both read at a glance.
export const StyledGhost = styled.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`;

export const StyledCursor = styled.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`;

export const StyledTip = styled.div`
  position: absolute;
  top: 1px;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 800;
  color: #fff;
  background: #0c1a17;
  padding: 1px 6px;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 4;
  pointer-events: none;
`;
