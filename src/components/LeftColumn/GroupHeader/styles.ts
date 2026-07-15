import styled from "styled-components";

// Group header matched to the mockup .bd-group .gh — a flat tinted band, uppercase sage (or gold for subcontract).
export const StyledGroupHeader = styled.div<{ $variant: "category" | "subcontract" }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractText : theme.colors.accent};
  background: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractBorder + "24" : theme.colors.accent + "14"};
  border-left: 3px solid
    ${({ theme, $variant }) => ($variant === "subcontract" ? theme.colors.subcontractBorder : "transparent")};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant === "subcontract" ? theme.colors.subcontractBorder + "33" : theme.colors.accent + "22"};
  }
`;

export const StyledLabel = styled.span<{ $variant: "category" | "subcontract" }>`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractText : theme.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`;

export const StyledCount = styled.span<{ $variant: "category" | "subcontract" }>`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractText : theme.colors.accent};
  flex-shrink: 0;
`;

export const StyledChevron = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  opacity: 0.85;
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed }) => ($collapsed ? "-90deg" : "0deg")});
  & svg {
    width: 11px;
    height: 11px;
  }
`;
