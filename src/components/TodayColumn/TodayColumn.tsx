import { FC, useMemo } from "react";
import dayjs from "dayjs";
import { Day, ZoomLevel } from "@/types/global";
import { useCalendar } from "@/context/CalendarProvider";
import { getColumnGeometry } from "@/utils/getColumnGeometry";
import { StyledTodayColumn } from "./styles";

type TodayColumnProps = {
  zoom: ZoomLevel;
  startDate: Day;
};

// Full-height framed HOY column drawn over the canvas, behind the tiles (plan §22.3): a soft teal tint from
// theme.colors.today. Hidden in the hourly view (the header/canvas tint marks today there).
const TodayColumn: FC<TodayColumnProps> = ({ zoom, startDate }) => {
  const { cols } = useCalendar();
  const geometry = useMemo(
    () => getColumnGeometry(dayjs(), zoom, startDate, cols),
    [zoom, startDate, cols]
  );

  if (!geometry) return null;

  return <StyledTodayColumn style={{ left: `${geometry.x}px`, width: `${geometry.width}px` }} aria-hidden />;
};

export default TodayColumn;
