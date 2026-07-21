import styled from "styled-components";

// Marks the date the user jumped to — a clear BLUE column, deliberately distinct from the teal HOY column so the two
// never read as the same thing. Sits below tiles in DOM order so events stay readable.
const JUMP = "#2f6fed";

export const StyledJumpColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${JUMP};
  border-right: 1px solid ${JUMP}55;
  background: ${JUMP}1c;
`;
