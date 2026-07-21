import { FC, useRef } from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { ReservationType } from "@/types/global";
import { TileIcon } from "./icons";
import { READINESS } from "./readiness";
import {
  StyledTileWrapper,
  StyledRStripe,
  StyledNt,
  StyledNtRow,
  StyledNtIco,
  StyledNtTitle,
  StyledNtClient,
  StyledNtBkCorner,
  StyledNtMeta,
  StyledTileTR,
  StyledDotWrap,
  StyledSubPill,
  StyledNtXs,
  StyledXsTime
} from "./styles";
import { TileProps } from "./types";

// Multi-day tiles always render the full info stack (title / booking·client / driver) and let text truncate, so
// nothing is dropped on narrow tiles. One-day tiles show both time chips once past this width.
const TIMES_MIN = 34;

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
  yOffset = 0,
  exiting = false,
  highlighted = false
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
      $unconfirmed={unconfirmedSub}
      $exiting={exiting}
      $highlighted={highlighted}>
      {stripeColor && <StyledRStripe style={{ background: stripeColor }} />}
      {children}
    </StyledTileWrapper>
  );

  // One-day: type icon over start/end time chips. Same top-right status cluster as multi-day (SUB pill or a white
  // dot-wrap with the coloured status icon), sized down for the small tile.
  if (isOneDayEvent) {
    return wrapper(
      <>
        {(isSubcontract || rd) && (
          <StyledTileTR $sm>
            {isSubcontract ? (
              <StyledSubPill>SUB</StyledSubPill>
            ) : (
              rd && (
                <StyledDotWrap $sm style={{ color: rd.color }}>
                  <TileIcon name={rd.icon} strokeWidth={rd.icon === "check" ? 2.6 : 2.2} />
                </StyledDotWrap>
              )
            )}
          </StyledTileTR>
        )}
        <StyledNtXs $transfer={isTransfer}>
          <TileIcon name={isTransfer ? "transfer" : "sun"} strokeWidth={2.4} />
          {width >= TIMES_MIN && (
            <>
              <StyledXsTime>{dayjs(data.startDate).format("h:mm A")}</StyledXsTime>
              {!isTransfer && <StyledXsTime $end>{dayjs(data.endDate).format("h:mm A")}</StyledXsTime>}
            </>
          )}
        </StyledNtXs>
      </>
    );
  }

  // Multi-day: always show the full info stack (icon+title / booking·client / driver); narrow tiles truncate rather
  // than drop lines, so no information is hidden.
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
      {data.bookingNumber && <StyledNtBkCorner>{data.bookingNumber}</StyledNtBkCorner>}
      <StyledNt>
        <StyledNtRow $pad>
          <StyledNtIco>
            <TileIcon name={isTransfer ? "transfer" : "tour"} />
          </StyledNtIco>
          <StyledNtTitle>{data.title}</StyledNtTitle>
        </StyledNtRow>
        {data.subtitle && (
          <StyledNtRow>
            <StyledNtClient>{data.subtitle}</StyledNtClient>
          </StyledNtRow>
        )}
        {data.driver && (
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
