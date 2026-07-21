import styled from "styled-components";
import { leftColumnWidth } from "@/constants";

// Content inset by leftColumnWidth for the same reason as the toolbar: the strip spans the full board width but its
// items must clear the sticky left column, which paints above it.
export const StyledLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${leftColumnWidth + 16}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.gridBackground};
  overflow-x: auto;
`;

export const StyledLabel = styled.span`
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  flex: none;
  & em {
    font-style: normal;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    color: #74897f;
    font-size: 9.5px;
    opacity: 0.85;
    margin-left: 3px;
  }
`;

export const StyledItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
  & svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledSubPill = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.subcontractText};
  background: ${({ theme }) => theme.colors.subcontractBg};
  border: 1px solid ${({ theme }) => theme.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`;

export const StyledSep = styled.span`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.border};
  flex: none;
`;

export const StyledState = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`;

export const StyledStripe = styled.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`;

export const StyledDot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
  flex: none;
  & svg {
    width: 9px;
    height: 9px;
  }
`;
