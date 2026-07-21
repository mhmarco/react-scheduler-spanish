import { FC, useMemo } from "react";
import dayjs from "dayjs";
import { Day, ZoomLevel } from "@/types/global";
import { useCalendar } from "@/context/CalendarProvider";
import { getColumnGeometry } from "@/utils/getColumnGeometry";
import { StyledJumpColumn, StyledJumpTag } from "./styles";

type JumpColumnProps = {
  zoom: ZoomLevel;
  startDate: Day;
};

// Marks the date the user explicitly jumped to (ribbon click / Ir a fecha) with a distinct violet dashed frame — a
// sibling of the teal HOY column so the two never read as the same thing. Nothing shows until a jump; suppressed when
// the jump lands on today (HOY already marks it) and cleared when the user hits Hoy.
const JumpColumn: FC<JumpColumnProps> = ({ zoom, startDate }) => {
  const { cols, jumpDate } = useCalendar();
  const geometry = useMemo(() => {
    if (!jumpDate || jumpDate.isSame(dayjs(), "day")) return null;
    return getColumnGeometry(jumpDate, zoom, startDate, cols);
  }, [jumpDate, zoom, startDate, cols]);

  if (!geometry) return null;

  return (
    <StyledJumpColumn style={{ left: `${geometry.x}px`, width: `${geometry.width}px` }} aria-hidden>
      <StyledJumpTag>IR</StyledJumpTag>
    </StyledJumpColumn>
  );
};

export default JumpColumn;
