import styled, { css, DefaultTheme, keyframes } from "styled-components";
import { GroupHeaderVariant, GroupTone } from "./types";

const attentionPulse = keyframes`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`;

type HeaderPalette = { text: string; bg: string; edge: string; bottom: string; hover: string };

const palette = (theme: DefaultTheme, variant: GroupHeaderVariant, tone?: GroupTone): HeaderPalette => {
  const { unassignedBorder, unassignedText, subcontractBorder, subcontractText, subcontractBg } = theme.colors;
  if (tone === "warning") {
    return {
      text: unassignedText,
      bg: unassignedBorder + "26",
      edge: unassignedBorder,
      bottom: unassignedBorder + "66",
      hover: unassignedBorder + "38"
    };
  }
  if (variant === "subcontract") {
    return {
      text: subcontractText,
      bg: subcontractBorder + "24",
      edge: subcontractBorder,
      bottom: subcontractBorder,
      hover: subcontractBorder + "33"
    };
  }
  // A provider inside the subcontract group: the lane's edge, and a band clearly darker than its units' rows so
  // each provider reads as the start of its own block.
  if (variant === "provider") {
    return {
      text: subcontractText,
      bg: subcontractBorder + "2E",
      edge: subcontractBorder,
      bottom: subcontractBorder + "55",
      hover: subcontractBorder + "40"
    };
  }
  return { text: "#5C8374", bg: "#E9EFEC", edge: "transparent", bottom: "#D4DFD9", hover: "#DAE6E0" };
};

// Group header matched to the mockup .bd-group .gh — a flat tinted band, uppercase sage (or gold for subcontract).
export const StyledGroupHeader = styled.div<{ $variant: GroupHeaderVariant; $tone?: GroupTone }>`
  display: flex;
  align-items: center;
  gap: ${({ $tone }) => ($tone ? "4px" : "5px")};
  padding: ${({ $tone, $variant }) =>
    $tone ? "0 7px 0 9px" : $variant === "provider" ? "0 11px 0 20px" : "0 11px 0 9px"};
  height: 21px;
  color: ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).text};
  background: ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).bg};
  border-left: 3px solid ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).edge};
  border-top: ${({ theme, $variant }) => ($variant === "provider" ? `1px solid ${theme.colors.subcontractBorder}` : "none")};
  border-bottom: 1px solid ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).bottom};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).hover};
  }
`;

export const StyledLabel = styled.span<{ $variant: GroupHeaderVariant; $tone?: GroupTone }>`
  font-size: ${({ $variant }) => ($variant === "provider" ? "10.5px" : "9.5px")};
  font-weight: ${({ $variant }) => ($variant === "provider" ? 700 : 750)};
  letter-spacing: ${({ $tone, $variant }) => ($tone ? "0.03em" : $variant === "provider" ? "0.01em" : "0.07em")};
  text-transform: ${({ $variant }) => ($variant === "provider" ? "none" : "uppercase")};
  color: ${({ theme, $variant, $tone }) => palette(theme, $variant, $tone).text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`;

export const StyledCount = styled.span<{ $variant: GroupHeaderVariant }>`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({ theme, $variant }) => palette(theme, $variant).text};
  flex-shrink: 0;
`;

export const StyledStatusCount = styled.span<{ $tone: GroupTone; $pulse?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 15px;
  padding: 0 5px 0 4px;
  border-radius: 8px;
  font-size: 9.5px;
  font-weight: 750;
  line-height: 1;
  flex-shrink: 0;
  color: ${({ theme, $tone }) =>
    $tone === "warning" ? (theme.mode === "dark" ? "#1C1917" : "#FFFFFF") : "#2E8B63"};
  background: ${({ theme, $tone }) =>
    $tone === "warning"
      ? theme.mode === "dark"
        ? theme.colors.unassignedBorder
        : theme.colors.unassignedText
      : "#2E8B6324"};
  --attention-ring: ${({ theme }) => theme.colors.unassignedBorder}99;
  ${({ $pulse }) =>
    $pulse &&
    css`
      animation: ${attentionPulse} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
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
