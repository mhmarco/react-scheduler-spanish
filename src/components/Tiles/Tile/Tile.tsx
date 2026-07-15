import { FC, useRef } from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { ReservationType, TileReadiness } from "@/types/global";
import { TileIcon, TileIconName } from "./icons";
import {
  StyledTileWrapper,
  StyledRStripe,
  StyledNt,
  StyledNtRow,
  StyledNtIco,
  StyledNtTitle,
  StyledNtClient,
  StyledNtBk,
  StyledNtMeta,
  StyledTileTR,
  StyledDotWrap,
  StyledSubPill,
  StyledNtXs,
  StyledXsTime,
  StyledXsCorner
} from "./styles";
import { TileProps } from "./types";

// Width buckets on the rendered tile (§22.2): wide (w>=248) = title / booking·client / driver; compact (w<248) =
// booking chip (+client at w>=156), no driver; one-day = both times.
const TIMES_MIN = 34;
const CLIENT_MIN = 156;
const WIDE_MIN = 248;

// Readiness → (4px stripe colour, status dot icon + colour). Tokens from the locked mockup (artifact 91ed97bb).
const READINESS: Record<TileReadiness, { stripe: string; icon: TileIconName; color: string }> = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
};
const SUB_OK = "#3E8E5A";
const SUB_WARN = "#D98A22";

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
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null);

  const isSameDay = dayjs(data.startDate).isSame(dayjs(data.endDate), "day");
  const isTour = data.eventType === ReservationType.Tour;
  const isTransfer = data.eventType === ReservationType.Transfer;
  const isOneDayEvent = isSameDay && (isTour || isTransfer);

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
      if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= 5) onTileClick?.(data);
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

  // Two-indicator chrome (§22.2): a 4px left readiness stripe, plus a top-right cluster — SUB pill for subcontract
  // tiles, or a white dot-wrap with a coloured status icon for in-house tiles.
  const rd = !isSubcontract && data.readiness ? READINESS[data.readiness] : null;
  const unconfirmedSub = isSubcontract && data.subcontractConfirmed === false;
  const stripeColor = isSubcontract ? (unconfirmedSub ? SUB_WARN : SUB_OK) : rd?.stripe;

  const wrapper = (children: React.ReactNode) => (
    <StyledTileWrapper
      data-segment-id={data.segmentId}
      style={wrapperStyle}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
      isDraggable={isDraggable}
      isDragging={isDragging}
      $unconfirmed={unconfirmedSub}>
      {stripeColor && <StyledRStripe style={{ background: stripeColor }} />}
      {children}
    </StyledTileWrapper>
  );

  // One-day: type icon over start/end time chips + a corner status dot.
  if (isOneDayEvent) {
    return wrapper(
      <>
        {isSubcontract && (
          <StyledTileTR $sm>
            <StyledSubPill>SUB</StyledSubPill>
          </StyledTileTR>
        )}
        <StyledNtXs>
          <TileIcon name={isTransfer ? "transfer" : "sun"} strokeWidth={2.4} />
          {width >= TIMES_MIN && (
            <>
              <StyledXsTime>{dayjs(data.startDate).format("HH:mm")}</StyledXsTime>
              {!isTransfer && <StyledXsTime $end>{dayjs(data.endDate).format("HH:mm")}</StyledXsTime>}
            </>
          )}
          {rd && <StyledXsCorner style={{ background: rd.color }} />}
        </StyledNtXs>
      </>
    );
  }

  // Multi-day: pin/transfer icon + title; booking·client and a driver line as the tile widens.
  const isWide = width >= WIDE_MIN;
  const bk = data.bookingNumber ? <StyledNtBk>{data.bookingNumber}</StyledNtBk> : null;
  return wrapper(
    <>
      <StyledTileTR>
        {isSubcontract ? (
          <StyledSubPill>SUB</StyledSubPill>
        ) : (
          rd && (
            <StyledDotWrap style={{ color: rd.color }}>
              <TileIcon name={rd.icon} strokeWidth={rd.icon === "check" ? 2.6 : 2.2} />
            </StyledDotWrap>
          )
        )}
      </StyledTileTR>
      <StyledNt>
        <StyledNtRow $pad>
          <StyledNtIco>
            <TileIcon name={isTransfer ? "transfer" : "tour"} />
          </StyledNtIco>
          {isWide ? (
            <StyledNtTitle>{data.title}</StyledNtTitle>
          ) : (
            <>
              {bk}
              {width >= CLIENT_MIN && data.subtitle && <StyledNtClient>{data.subtitle}</StyledNtClient>}
            </>
          )}
        </StyledNtRow>
        {isWide && (
          <StyledNtRow>
            {bk}
            {data.subtitle && <StyledNtClient>{data.subtitle}</StyledNtClient>}
          </StyledNtRow>
        )}
        {isWide && data.driver && (
          <StyledNtMeta>
            <TileIcon name="person" />
            {data.driver}
          </StyledNtMeta>
        )}
      </StyledNt>
    </>
  );
};

export default Tile;
