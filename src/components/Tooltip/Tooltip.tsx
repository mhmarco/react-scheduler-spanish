import { FC, useLayoutEffect, useRef, useState } from "react";
import { ReservationType } from "@/types/global";
import { useLanguage } from "@/context/LocaleProvider";
import { TooltipProps } from "./types";
import {
  StyledTooltipWrapper,
  StyledHeader,
  StyledHeaderTop,
  StyledBookingId,
  StyledTypeBadge,
  StyledTitle,
  StyledClient,
  StyledBody,
  StyledTimeBlock,
  StyledTimeItem,
  StyledTimeLabel,
  StyledTimeValue,
  StyledTimeDate,
  StyledTimeHour,
  StyledDetails,
  StyledDetailItem,
  StyledDetailLabel,
  StyledDetailValue,
  StyledNotesSection,
  StyledNoteItem,
  StyledNoteLabel,
  StyledNoteText
} from "./styles";

type TooltipPosition = "above" | "below";

const defaultTranslations = {
  client: "Client",
  startDate: "Start",
  endDate: "End",
  groupName: "Group",
  driver: "Driver",
  flightNumber: "Flight",
  serviceNotes: "Service Notes",
  reservationNotes: "Reservation Notes",
  salida: "Salida",
  destino: "Destino",
  regreso: "Regreso",
  tour: "Tour",
  transfer: "Transfer",
  oneDay: "One-day",
  passengers: "Pax"
};

const Tooltip: FC<TooltipProps> = ({ tooltipData, visible = true }) => {
  const { mouseCoords, reservationData } = tooltipData;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<TooltipPosition>("below");
  const lang = useLanguage();
  const t = { ...defaultTranslations, ...lang.tooltip };

  useLayoutEffect(() => {
    if (!tooltipRef.current || !mouseCoords) return;

    const tooltip = tooltipRef.current;
    const { width: tooltipWidth, height: tooltipHeight } = tooltip.getBoundingClientRect();
    
    const parent = tooltip.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    
    const offset = 12;
    const padding = 4;
    
    const spaceBelow = parentRect.height - mouseCoords.y;
    const spaceRight = parentRect.width - mouseCoords.x;
    
    let x = mouseCoords.x + offset;
    let y = mouseCoords.y + offset;
    let pos: TooltipPosition = "below";
    
    if (spaceRight < tooltipWidth + offset) {
      x = mouseCoords.x - tooltipWidth - offset;
    }
    if (spaceBelow < tooltipHeight + offset) {
      y = mouseCoords.y - tooltipHeight - offset;
      pos = "above";
    }
    
    x = Math.max(padding, Math.min(x, parentRect.width - tooltipWidth - padding));
    y = Math.max(padding, Math.min(y, parentRect.height - tooltipHeight - padding));
    
    setPosition(pos);
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }, [mouseCoords]);

  const isTour = reservationData.reservationType === ReservationType.Tour;
  const isOneDayTour = isTour && reservationData.isOneDayEvent;
  
  // Determine badge type and label
  const getBadgeType = () => {
    if (!isTour) return "transfer";
    return isOneDayTour ? "oneday" : "tour";
  };
  
  const getBadgeLabel = () => {
    if (!isTour) return t.transfer;
    return isOneDayTour ? t.oneDay : t.tour;
  };
  
  // Build details array for grid
  const details = [
    reservationData.groupName && { label: t.groupName, value: reservationData.groupName },
    reservationData.driver && { label: t.driver, value: reservationData.driver },
    reservationData.passengers && { label: t.passengers, value: String(reservationData.passengers) },
    reservationData.flightNumber && { label: t.flightNumber, value: reservationData.flightNumber }
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <StyledTooltipWrapper ref={tooltipRef} $position={position} $visible={visible}>
      <StyledHeader>
        <StyledHeaderTop>
          <StyledBookingId>{reservationData.bookingNumber}</StyledBookingId>
          <StyledTypeBadge $type={getBadgeType()}>
            {getBadgeLabel()}
          </StyledTypeBadge>
        </StyledHeaderTop>
        <StyledTitle>{reservationData.eventName}</StyledTitle>
        {reservationData.client && (
          <StyledClient>{reservationData.client}</StyledClient>
        )}
      </StyledHeader>

      <StyledBody>
        <StyledTimeBlock>
          <StyledTimeItem>
            <StyledTimeLabel>{t.startDate}</StyledTimeLabel>
            <StyledTimeValue>
              <StyledTimeDate>{reservationData.startDate}</StyledTimeDate>
              {" "}
              <StyledTimeHour>{reservationData.startTime}</StyledTimeHour>
            </StyledTimeValue>
          </StyledTimeItem>
          
          {isTour && reservationData.endDate && (
            <StyledTimeItem $isEnd>
              <StyledTimeLabel>{t.endDate}</StyledTimeLabel>
              <StyledTimeValue>
                <StyledTimeDate>{reservationData.endDate}</StyledTimeDate>
                {" "}
                <StyledTimeHour>{reservationData.endTime}</StyledTimeHour>
              </StyledTimeValue>
            </StyledTimeItem>
          )}
        </StyledTimeBlock>

        {details.length > 0 && (
          <StyledDetails>
            {details.map((detail, i) => (
              <StyledDetailItem key={i}>
                <StyledDetailLabel>{detail.label}</StyledDetailLabel>
                <StyledDetailValue>{detail.value}</StyledDetailValue>
              </StyledDetailItem>
            ))}
          </StyledDetails>
        )}

        {(reservationData.departureAddress ||
          reservationData.destinationAddress ||
          reservationData.returnAddress) && (
          <StyledNotesSection>
            {reservationData.departureAddress && (
              <StyledNoteItem>
                <StyledNoteLabel>{t.salida}</StyledNoteLabel>
                <StyledNoteText>{reservationData.departureAddress}</StyledNoteText>
              </StyledNoteItem>
            )}
            {reservationData.destinationAddress && (
              <StyledNoteItem>
                <StyledNoteLabel>{t.destino}</StyledNoteLabel>
                <StyledNoteText>{reservationData.destinationAddress}</StyledNoteText>
              </StyledNoteItem>
            )}
            {reservationData.returnAddress && (
              <StyledNoteItem>
                <StyledNoteLabel>{t.regreso}</StyledNoteLabel>
                <StyledNoteText>{reservationData.returnAddress}</StyledNoteText>
              </StyledNoteItem>
            )}
          </StyledNotesSection>
        )}

        {(reservationData.serviceNotes || reservationData.reservationNotes) && (
          <StyledNotesSection>
            {reservationData.serviceNotes && (
              <StyledNoteItem>
                <StyledNoteLabel>{t.serviceNotes}</StyledNoteLabel>
                <StyledNoteText>{reservationData.serviceNotes}</StyledNoteText>
              </StyledNoteItem>
            )}
            {reservationData.reservationNotes && (
              <StyledNoteItem>
                <StyledNoteLabel>{t.reservationNotes}</StyledNoteLabel>
                <StyledNoteText>{reservationData.reservationNotes}</StyledNoteText>
              </StyledNoteItem>
            )}
          </StyledNotesSection>
        )}
      </StyledBody>
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
