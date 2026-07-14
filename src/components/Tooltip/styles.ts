import styled from "styled-components";
import { marginPaddingReset } from "@/styles";

export const StyledTooltipWrapper = styled.div<{ $position?: "above" | "below" }>`
  position: absolute;
  width: 240px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`;

export const StyledHeader = styled.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const StyledBookingId = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.5px;
`;

export const StyledTypeBadge = styled.span<{ $type: "tour" | "transfer" | "oneday" }>`
  background: ${({ $type }) => ($type === "transfer" ? "#dbeafe" : "#dcfce7")};
  color: ${({ $type }) => ($type === "transfer" ? "#1e40af" : "#166534")};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`;

export const StyledTitle = styled.div`
  ${marginPaddingReset}
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledClient = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.placeholder};
  margin-top: 2px;
`;

export const StyledBody = styled.div`
  padding: 10px 12px;
`;

export const StyledTimeBlock = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;

export const StyledTimeItem = styled.div<{ $isEnd?: boolean }>`
  flex: 1;
  ${({ $isEnd }) => $isEnd && `opacity: 0.8;`}
`;

export const StyledTimeLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`;

export const StyledTimeValue = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledTimeDate = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledTimeHour = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

export const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledDetailItem = styled.div``;

export const StyledDetailLabel = styled.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const StyledDetailValue = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledNotesSection = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 8px;
`;

export const StyledNoteItem = styled.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledNoteLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`;

export const StyledNoteText = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.4;
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 8px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 60px;
  overflow-y: auto;
`;

// Legacy exports for compatibility
export const StyledTooltipHeader = styled.div``;
export const StyledBookingBadge = styled.span``;
export const StyledEventTitle = styled.span``;
export const StyledTooltipContent = styled.div``;
export const StyledInfoRow = styled.div``;
export const StyledInfoLabel = styled.span``;
export const StyledInfoValue = styled.span``;
export const StyledDivider = styled.div``;
export const StyledDateTimeRow = styled.div``;
export const StyledDateLabel = styled.span``;
export const StyledDateTime = styled.span``;
export const StyledIconWrapper = styled.div``;
export const StyledInfoContent = styled.div``;
export const StyledTimeRange = styled.div``;
export const StyledTimeSeparator = styled.span``;
export const StyledTooltipBeak = styled.div``;
export const StyledContentWrapper = styled.div``;
export const StyledInnerWrapper = styled.div``;
export const StyledTextWrapper = styled.div``;
export const StyledText = styled.p``;
export const StyledOvertimeWarning = styled.span``;
