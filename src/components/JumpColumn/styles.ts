import styled from "styled-components";

// Deliberately distinct from the teal HOY column (StyledTodayColumn): a violet DASHED frame + tint + a small "IR" tag,
// so the user reads it as "the date I jumped to", not today. Sits below tiles in DOM order so events stay readable.
const JUMP = "#6b5fc7";

export const StyledJumpColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px dashed ${JUMP};
  border-right: 1px dashed ${JUMP}55;
  background: ${JUMP}12;
`;

export const StyledJumpTag = styled.span`
  position: absolute;
  top: 3px;
  left: 0;
  transform: translateX(-1px);
  font-size: 7.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #fff;
  background: ${JUMP};
  padding: 0 3px;
  border-radius: 3px;
`;
