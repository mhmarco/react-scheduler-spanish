import styled from "styled-components";

export const StyledGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px 0 16px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.subcontractBg};
  border-top: 2px solid ${({ theme }) => theme.colors.subcontractBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.subcontractBorder};
  cursor: pointer;
  user-select: none;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const StyledLabel = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.subcontractText};
`;

export const StyledToggle = styled.span<{ $collapsed: boolean }>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.subcontractText};
  transition: transform 0.2s ease;
  display: inline-flex;
  transform: rotate(${({ $collapsed }) => ($collapsed ? "0deg" : "180deg")});
`;
