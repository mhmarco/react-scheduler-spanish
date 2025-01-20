import { FC, useLayoutEffect, useRef } from "react";
import { dayWidth, weekWidth, zoom2ColumnWidth } from "@/constants";
import { useLanguage } from "@/context/LocaleProvider";
import Icon from "../Icon";
import {
  StyledContentWrapper,
  StyledInnerWrapper,
  StyledOvertimeWarning,
  StyledText,
  StyledTextWrapper,
  StyledTooltipBeak,
  StyledTooltipContent,
  StyledTooltipWrapper
} from "./styles";
import { TooltipProps } from "./types";

const Tooltip: FC<TooltipProps> = ({ tooltipData, zoom }) => {
  const { taken, free, over } = useLanguage();

  const { coords, disposition } = tooltipData;
  const tooltipRef = useRef<HTMLDivElement>(null);
  let width = weekWidth;
  switch (zoom) {
    case 0:
      width = weekWidth;
      break;
    case 1:
      width = dayWidth;
      break;
    case 2:
      width = zoom2ColumnWidth;
      break;
  }

  useLayoutEffect(() => {
    // re calculate tooltip width before repaint
    if (!tooltipRef.current) return;

    const { width: tooltipWidth } = tooltipRef.current.getBoundingClientRect();

    let xOffset;
    switch (zoom) {
      case 2:
        xOffset = tooltipWidth / 2 + width;
        break;
      default:
        xOffset = tooltipWidth / 2 + width / 2;
        break;
    }
    tooltipRef.current.style.left = `${coords.x - xOffset}px`;
    tooltipRef.current.style.top = `${coords.y + 8}px`;

    // disposition.overtime affects tooltip's width, thus it's needed to recalculate it's coords whenever overtime changes
  }, [coords.x, width, disposition.overtime, coords.y, zoom]);

  return (
    <StyledTooltipWrapper ref={tooltipRef}>
      <StyledTooltipContent>
        <StyledContentWrapper>
          <StyledInnerWrapper>
            <Icon iconName="defaultAvatar" height="12" />
            <StyledTextWrapper>
              <StyledText>{`Cliente: ${tooltipData.reservationData.client}`}</StyledText>
            </StyledTextWrapper>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <Icon iconName="calendarFree" height="12" />
            <StyledTextWrapper>
              <StyledText>{`Inicio: ${tooltipData.reservationData.startTime}`}</StyledText>
            </StyledTextWrapper>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <Icon iconName="subtract" height="12" />
            <StyledTextWrapper>
              <StyledText>{tooltipData.reservationData.eventName}</StyledText>
            </StyledTextWrapper>
          </StyledInnerWrapper>
        </StyledContentWrapper>
      </StyledTooltipContent>
      <StyledTooltipBeak />
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
