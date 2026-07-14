import { FC, useRef } from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { ReservationType } from "@/types/global";
import {
  StyledTileWrapper,
  StyledOneDayStack,
  StyledTimes,
  StyledTileIcon,
  StyledTileBody,
  StyledTileLines,
  StyledLine
} from "./styles";
import { TileProps } from "./types";

// Width buckets (px, on the actual rendered tile) — content scales up with available room (plan §4/§22.6).
const TIMES_MIN = 34; // one-day: show start/end times under the type icon
const SUBTITLE_MIN = 90; // multi-day: add the client line
const DRIVER_MIN = 150; // multi-day: add the driver line

const Tile: FC<TileProps> = ({
  row,
  data,
  zoom,
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
        isDragging={isDragging}>
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

  // Multi-day: icon + title, adding client and driver as the tile widens. True ellipsis, no sticky fade-mask clip.
  return (
    <StyledTileWrapper
      data-segment-id={data.segmentId}
      style={wrapperStyle}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
      isDraggable={isDraggable}
      isDragging={isDragging}>
      <StyledTileBody>
        <StyledTileIcon>{icon}</StyledTileIcon>
        <StyledTileLines>
          <StyledLine bold>{data.title}</StyledLine>
          {width >= SUBTITLE_MIN && data.subtitle && <StyledLine>{data.subtitle}</StyledLine>}
          {width >= DRIVER_MIN && data.driver && <StyledLine>{data.driver}</StyledLine>}
        </StyledTileLines>
      </StyledTileBody>
    </StyledTileWrapper>
  );
};

export default Tile;
