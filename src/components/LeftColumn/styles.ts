import styled, { css, keyframes } from "styled-components";
import { leftColumnWidth } from "@/constants";
import { StyledInputWrapperProps, StyledLeftColumnHeaderProps } from "./types";

export const StyledWrapper = styled.div`
  min-width: ${leftColumnWidth + "px"};
  max-width: ${leftColumnWidth + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`;

export const StyledLeftColumnHeader = styled.div<StyledLeftColumnHeaderProps>`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({ $height }) => $height}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${leftColumnWidth}px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 3;
`;

export const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  margin-left: 10px;
  height: 36px;
  flex: 1;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.colors.accent : theme.colors.border)};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`;

const groupFadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Collapse motion: a group first fades out (both here and on the grid, in lockstep), THEN the layout snaps closed — so
// the two columns snap together and nothing overlaps a snapped-up row mid-fade. A keyframe (not a transition) because
// these rows can remount, which would make a transition paint 0 from birth and jump. Kept mounted only for the fade
// beat; the host removes it right after (see Calendar fade-then-collapse).
export const StyledGroupBody = styled.div<{ $fading: boolean }>`
  ${({ $fading }) =>
    $fading &&
    css`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${groupFadeOut} 180ms ease forwards;
      }
    `}
`;

export const StyledCollapseButton = styled.button<{ $allCollapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.colors.placeholder};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    transform: scale(0.95);
  }
`;
