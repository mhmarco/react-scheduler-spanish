import styled, { DefaultTheme } from "styled-components";
import { GroupHeaderVariant, GroupTone } from "./types";

const warningText = (theme: DefaultTheme) => (theme.mode === "dark" ? "#FCA5A5" : "#B91C1C");

// Group header matched to the mockup .bd-group .gh — a flat tinted band, uppercase sage (or gold for subcontract).
export const StyledGroupHeader = styled.div<{ $variant: GroupHeaderVariant; $tone?: GroupTone }>`
  display: flex;
  align-items: center;
  gap: ${({ $tone }) => ($tone ? "4px" : "5px")};
  padding: ${({ $tone }) => ($tone ? "0 7px 0 9px" : "0 11px 0 9px")};
  height: 21px;
  color: ${({ theme, $variant, $tone }) =>
    $tone === "warning"
      ? warningText(theme)
      : $variant === "subcontract"
      ? theme.colors.subcontractText
      : "#5C8374"};
  background: ${({ theme, $variant, $tone }) =>
    $tone === "warning"
      ? theme.colors.warning + "26"
      : $variant === "subcontract"
      ? theme.colors.subcontractBorder + "24"
      : "#E9EFEC"};
  border-left: 3px solid
    ${({ theme, $variant, $tone }) =>
      $tone === "warning"
        ? theme.colors.warning
        : $variant === "subcontract"
        ? theme.colors.subcontractBorder
        : "transparent"};
  border-bottom: 1px solid
    ${({ theme, $variant, $tone }) =>
      $tone === "warning"
        ? theme.colors.warning + "66"
        : $variant === "subcontract"
        ? theme.colors.subcontractBorder
        : "#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme, $variant, $tone }) =>
      $tone === "warning"
        ? theme.colors.warning + "38"
        : $variant === "subcontract"
        ? theme.colors.subcontractBorder + "33"
        : "#DAE6E0"};
  }
`;

export const StyledLabel = styled.span<{ $variant: GroupHeaderVariant; $tone?: GroupTone }>`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: ${({ $tone }) => ($tone ? "0.03em" : "0.07em")};
  text-transform: uppercase;
  color: ${({ theme, $variant, $tone }) =>
    $tone === "warning"
      ? warningText(theme)
      : $variant === "subcontract"
      ? theme.colors.subcontractText
      : "#5C8374"};
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
  color: ${({ theme, $variant }) =>
    $variant === "subcontract" ? theme.colors.subcontractText : "#5C8374"};
  flex-shrink: 0;
`;

export const StyledStatusCount = styled.span<{ $tone: GroupTone }>`
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
  color: ${({ $tone }) => ($tone === "warning" ? "#FFFFFF" : "#2E8B63")};
  background: ${({ theme, $tone }) => ($tone === "warning" ? theme.colors.warning : "#2E8B6324")};
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
