import styled from "styled-components";

// Teal HOY frame: 2px L/R borders, a 3px top cap, a soft glow, and a faint teal wash. `today` is theme-driven
// (the consumer can recolour it via config.theme). Sits below tiles in DOM order, so events stay readable.
export const StyledTodayColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({ theme }) => theme.colors.today};
  border-right: 2px solid ${({ theme }) => theme.colors.today};
  box-shadow: inset 0 3px 0 0 ${({ theme }) => theme.colors.today}, 0 0 10px ${({ theme }) => theme.colors.today}33;
  background: ${({ theme }) => theme.colors.today}12;
  border-radius: 0 0 2px 2px;
`;
