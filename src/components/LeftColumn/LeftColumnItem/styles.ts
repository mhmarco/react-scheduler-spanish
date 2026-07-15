import styled from "styled-components";
import { boxHeight } from "@/constants";
import { StyledLeftColumnItemWrapperProps, StyledTextProps } from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  border-top: 1px solid
    ${({ theme, $isSubcontract }) =>
      $isSubcontract ? theme.colors.subcontractBorder + "33" : theme.colors.border};
  background-color: ${({ theme, $isSubcontract }) =>
    $isSubcontract ? theme.colors.subcontractBg : "transparent"};
  transition: 0.5s ease;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div<{ $provider?: boolean }>`
  margin-right: 0.625rem;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${({ theme, $provider }) =>
    $provider ? theme.colors.subcontractBg : theme.colors.accent + "1A"};
  color: ${({ theme, $provider }) => ($provider ? theme.colors.subcontractText : theme.colors.accent)};
  & svg {
    width: 17px;
    height: 17px;
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain }) => (isMain ? 0.75 + "rem" : 0.625 + "rem")};
  letter-spacing: ${({ isMain }) => (isMain ? 1 + "px" : 0.5 + "px")};
  line-height: ${({ isMain }) => (isMain ? 1.125 + "rem" : 0.75 + "rem")};
  color: ${({ isMain, theme }) => (isMain ? theme.colors.textPrimary : theme.colors.placeholder)};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;
