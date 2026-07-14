import { FC, useRef } from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { ReservationType } from "@/types/global";
import {
  StyledDescription,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper,
  StyledOneDayWrapper,
  StyledOneDayLabel
} from "./styles";
import { TileProps } from "./types";

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

  // Render compact layout for single-day events - just a clean label
  if (isOneDayEvent) {
    return (
      <StyledTileWrapper
        data-segment-id={data.segmentId}
        style={{
          left: `${x}px`,
          top: `${y + yOffset}px`,
          backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
          width: `${width}px`,
          color: getTileTextColor(data.bgColor ?? "")
        }}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onDragStart={(e) => e.preventDefault()}
        isDraggable={isDraggable}
        isDragging={isDragging}>
        <StyledOneDayWrapper>
          <StyledOneDayLabel $type={isTransfer ? "transfer" : "tour"}>
            {isTransfer ? "TRF" : "1-DAY"}
          </StyledOneDayLabel>
        </StyledOneDayWrapper>
      </StyledTileWrapper>
    );
  }

  // Standard layout for multi-day events
  return (
    <StyledTileWrapper
      data-segment-id={data.segmentId}
      style={{
        left: `${x}px`,
        top: `${y + yOffset}px`,
        backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
        width: `${width}px`,
        color: getTileTextColor(data.bgColor ?? "")
      }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
      isDraggable={isDraggable}
      isDragging={isDragging}>
      <StyledTextWrapper>
        <StyledStickyWrapper>
          <StyledText bold>{data.title}</StyledText>
          <StyledText>{data.subtitle}</StyledText>
          <StyledDescription>{data.description}</StyledDescription>
        </StyledStickyWrapper>
      </StyledTextWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
