import styled from "styled-components";

// HOY column (plan §22.3, which supersedes the §3.7 frame): a SOFT teal tint ONLY — deliberately no border, no
// glow, no frame, no top cap. `today` is theme-driven. Sits below tiles in DOM order so events stay readable.
export const StyledTodayColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.today}12;
`;
