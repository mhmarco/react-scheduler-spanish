import styled from "styled-components";

export const StyledGroupHeader = styled.div<{ $variant: "category" | "subcontract" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px 0 0;
  height: 28px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.background} 100%)`
      : `linear-gradient(90deg, #F3F4F6 0%, ${theme.colors.background} 100%)`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark"
        ? theme.colors.secondary
        : "#EBEDF0"};
  }
`;

export const StyledAccent = styled.div<{ $variant: "category" | "subcontract" }>`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractBorder : theme.colors.accent};
  border-radius: 0 2px 2px 0;
`;

export const StyledLabel = styled.span<{ $variant: "category" | "subcontract" }>`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractText : theme.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`;

export const StyledCount = styled.span<{ $variant: "category" | "subcontract" }>`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractBorder : theme.colors.accent};
  background: ${({ theme, $variant }) =>
    $variant === "subcontract"
      ? theme.colors.subcontractBorder + "18"
      : theme.colors.accent + "14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`;

export const StyledChevron = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({ $collapsed }) => ($collapsed ? "-90deg" : "0deg")});
`;
