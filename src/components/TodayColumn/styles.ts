import styled from "styled-components";

// HOY column (plan §22.3, which supersedes the §3.7 frame): a SOFT teal tint + a single accent LEFT border only
// — deliberately no glow, no frame, no top cap. `today` is theme-driven. Sits below tiles in DOM order so events
// stay readable.
export const StyledTodayColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme }) => theme.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({ theme }) => theme.colors.today}12;
`;
