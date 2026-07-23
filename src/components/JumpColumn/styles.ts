import styled from "styled-components";

// Marks the date the user jumped to — a soft BLUE background tint only (no border), deliberately distinct from the
// teal HOY column so the two never read as the same thing. Sits below tiles in DOM order so events stay readable.
const JUMP = "#2f6fed";

export const StyledJumpColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${JUMP}1c;
`;
