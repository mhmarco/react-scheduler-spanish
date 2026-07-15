import { FC, useRef } from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { ReservationType, TileReadiness } from "@/types/global";
import {
  StyledTileWrapper,
  StyledOneDayStack,
  StyledTimes,
  StyledTileIcon,
  StyledTileBody,
  StyledTileLines,
  StyledLine,
  StyledBookingChip,
  StyledReadinessStripe,
  StyledTileTR,
  StyledSubPill,
  StyledAckDot
} from "./styles";
import { TileProps } from "./types";

// Width buckets (px, on the actual rendered tile) — the locked §22.2 / §17.B6 thresholds:
// wide (w>=248) = title / booking·client / driver; compact (w<248) = booking chip (+client at w>=156), NO driver.
const TIMES_MIN = 34; // one-day: show start/end times under the type icon
const CLIENT_MIN = 156; // compact: add the client line
const WIDE_MIN = 248; // wide bucket: title + booking·client + driver line

// Readiness stripe/dot palette (§22.4: muted / warn / info / ok).
const READINESS_COLOR: Record<TileReadiness, string> = {
  sin_chofer: "#9AA5A0",
  sin_avisar: "#E0A83C",
  notificado: "#3B82F6",
  confirmado: "#2FA36B"
};
// Icon-in-circle glyphs so the four states are distinguishable without colour (§22.2).
const READINESS_GLYPH: Record<TileReadiness, string> = {
  sin_chofer: "○",
  sin_avisar: "!",
  notificado: "→",
  confirmado: "✓"
};
const SUB_CONFIRMED = "#3E8E5A";
const SUB_UNCONFIRMED = "#9AA5A0";

const Tile: FC<TileProps> = ({
  row,
  data,
  zoom,
  isSubcontract = false,
  onTileClick,
  onDragStart,
  isDragging = false,
  isDraggable = true,
  yOffset = 0
}) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  const { colors } = useTheme();

  // Track mouse down position to detect drag vs click
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null);
  
  // Check if this is a single-day event
  const isSameDay = dayjs(data.startDate).isSame(dayjs(data.endDate), "day");
  const isTour = data.eventType === ReservationType.Tour;
  const isTransfer = data.eventType === ReservationType.Transfer;
  const isOneDayEvent = isSameDay && (isTour || isTransfer);
  const icon = isTransfer ? "⇄" : isOneDayEvent ? "☀" : "▦";

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
    
    if (isDraggable && onDragStart) {
      e.preventDefault();
      onDragStart(data, e);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (mouseDownPos.current) {
      const deltaX = Math.abs(e.clientX - mouseDownPos.current.x);
      const deltaY = Math.abs(e.clientY - mouseDownPos.current.y);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance <= 5) {
        onTileClick?.(data);
      }
      
      mouseDownPos.current = null;
    } else {
      onTileClick?.(data);
    }
  };

  const wrapperStyle = {
    left: `${x}px`,
    top: `${y + yOffset}px`,
    backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
    width: `${width}px`,
    color: getTileTextColor(data.bgColor ?? "")
  };

  // Two-indicator chrome (§22.2): left readiness stripe + top-right cluster (SUB pill for subcontracts, an
  // ack/readiness dot for in-house). Unconfirmed subcontracts also get a dashed border.
  const unconfirmedSub = isSubcontract && data.subcontractConfirmed === false;
  const stripeColor = isSubcontract
    ? (data.subcontractConfirmed === false ? SUB_UNCONFIRMED : SUB_CONFIRMED)
    : data.readiness
    ? READINESS_COLOR[data.readiness]
    : undefined;

  const chrome = (
    <>
      {stripeColor && <StyledReadinessStripe style={{ background: stripeColor }} />}
      <StyledTileTR>
        {isSubcontract ? (
          <StyledSubPill>SUB</StyledSubPill>
        ) : (
          data.readiness && (
            <StyledAckDot style={{ background: READINESS_COLOR[data.readiness] }}>
              {READINESS_GLYPH[data.readiness]}
            </StyledAckDot>
          )
        )}
      </StyledTileTR>
    </>
  );

  // XS one-day: type icon over start/end times (fixes the old blank "1-DAY"/"TRF" pill). Icon-only when too narrow.
  if (isOneDayEvent) {
    return (
      <StyledTileWrapper
        data-segment-id={data.segmentId}
        style={wrapperStyle}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onDragStart={(e) => e.preventDefault()}
        isDraggable={isDraggable}
        isDragging={isDragging}
        $dashed={unconfirmedSub}>
        {chrome}
        <StyledOneDayStack>
          <StyledTileIcon>{icon}</StyledTileIcon>
          {width >= TIMES_MIN && (
            <StyledTimes>
              <span>{dayjs(data.startDate).format("HH:mm")}</span>
              {!isTransfer && <span>{dayjs(data.endDate).format("HH:mm")}</span>}
            </StyledTimes>
          )}
        </StyledOneDayStack>
      </StyledTileWrapper>
    );
  }

  // Multi-day content by width bucket (§22.2). Booking chip appears on every tile (incl. subcontract). Wide tiles
  // lead with the title; compact tiles use the booking # as the identifier. True ellipsis, no sticky fade clip.
  const isWide = width >= WIDE_MIN;
  const bookingChip = data.bookingNumber ? <StyledBookingChip>{data.bookingNumber}</StyledBookingChip> : null;
  return (
    <StyledTileWrapper
      data-segment-id={data.segmentId}
      style={wrapperStyle}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
      isDraggable={isDraggable}
      isDragging={isDragging}
      $dashed={unconfirmedSub}>
      {chrome}
      <StyledTileBody>
        <StyledTileIcon>{icon}</StyledTileIcon>
        <StyledTileLines>
          {isWide ? (
            <>
              <StyledLine bold>{data.title}</StyledLine>
              <StyledLine>
                {bookingChip}
                {data.subtitle}
              </StyledLine>
              {data.driver && <StyledLine>{data.driver}</StyledLine>}
            </>
          ) : (
            <>
              <StyledLine>{bookingChip}</StyledLine>
              {width >= CLIENT_MIN && data.subtitle && <StyledLine>{data.subtitle}</StyledLine>}
            </>
          )}
        </StyledTileLines>
      </StyledTileBody>
    </StyledTileWrapper>
  );
};

export default Tile;
