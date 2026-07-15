import styled from "styled-components";
import { overviewHeight } from "@/constants";
import { StyledOutsideWrapperProps } from "./types";

export const StyledOutsideWrapper = styled.div<StyledOutsideWrapperProps>`
  position: absolute;
  top: 0;
  bottom: ${({ $footer }) => ($footer ? overviewHeight : 0)}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll }) => (showScroll ? "scroll" : "hidden")};
  background-color: ${({ theme }) => theme.colors.gridBackground};
`;
export const StyledInnerWrapper = styled.div`
  position: relative;
`;
