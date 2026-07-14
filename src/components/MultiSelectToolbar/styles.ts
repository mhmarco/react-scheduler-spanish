import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledToolbar = styled.div<{ $hasConflicts?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ $hasConflicts }) =>
    $hasConflicts
      ? "linear-gradient(to right, rgba(245, 158, 11, 0.95), rgba(245, 158, 11, 0.9))"
      : "linear-gradient(to right, rgba(34, 197, 94, 0.95), rgba(34, 197, 94, 0.9))"};
  border-bottom: 2px solid ${({ $hasConflicts }) => ($hasConflicts ? "#d97706" : "#16a34a")};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 9999;
  animation: ${slideDown} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const StyledSelectionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StyledSelectionCount = styled.span<{ $hasConflicts?: boolean }>`
  font-weight: 600;
  font-size: 14px;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "${({ $hasConflicts }) => ($hasConflicts ? "!" : "✓")}";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: white;
    color: ${({ $hasConflicts }) => ($hasConflicts ? "#f59e0b" : "#22c55e")};
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const StyledConflictWarning = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`;

export const StyledHint = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;

export const StyledSelectionList = styled.div`
  display: none;
`;

export const StyledSelectionItem = styled.div`
  display: none;
`;

export const StyledRemoveButton = styled.button`
  display: none;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledButton = styled.button<{ variant: "primary" | "secondary"; $hasConflicts?: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;

  ${({ variant, $hasConflicts }) =>
    variant === "primary"
      ? `
    background: white;
    color: ${$hasConflicts ? "#b45309" : "#15803d"};
    border: none;
    
    &:hover {
      background: ${$hasConflicts ? "#fef3c7" : "#f0fdf4"};
    }
  `
      : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  `}
`;
