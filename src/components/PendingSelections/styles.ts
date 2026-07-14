import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledPendingSelection = styled.div<{ $hasConflict?: boolean; $isDragging?: boolean }>`
  position: absolute;
  background: ${({ $hasConflict, $isDragging }) =>
    $isDragging
      ? $hasConflict
        ? "rgba(245, 158, 11, 0.4)"
        : "rgba(34, 197, 94, 0.4)"
      : $hasConflict
        ? "rgba(245, 158, 11, 0.2)"
        : "rgba(34, 197, 94, 0.2)"};
  border: 2px solid ${({ $hasConflict }) => ($hasConflict ? "#f59e0b" : "#22c55e")};
  border-radius: 4px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.2s ease-out;
  z-index: ${({ $isDragging }) => ($isDragging ? 100 : 5)};
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
  transition: ${({ $isDragging }) => ($isDragging ? "none" : "background 0.15s ease")};
  box-shadow: ${({ $isDragging }) => ($isDragging ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none")};

  &:hover {
    background: ${({ $hasConflict }) =>
      $hasConflict ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"};
  }

  ${({ $hasConflict }) =>
    $hasConflict &&
    css`
      border-style: dashed;
    `}
`;

export const StyledSelectionLabel = styled.span<{ $hasConflict?: boolean }>`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $hasConflict }) => ($hasConflict ? "#b45309" : "#15803d")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const StyledConflictIcon = styled.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`;

export const StyledRemoveButton = styled.button`
  background: rgba(220, 38, 38, 0.1);
  border: none;
  color: #dc2626;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  padding: 2px 6px;
  border-radius: 4px;
  opacity: 0.7;
  flex-shrink: 0;
  margin-left: 4px;

  &:hover {
    opacity: 1;
    background: rgba(220, 38, 38, 0.2);
  }
`;
