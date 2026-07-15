import { MutableRefObject, ReactNode } from "react";
import dayjs from "dayjs";
import { Config, Coords, Day, SchedulerData, ZoomLevel } from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type CalendarContextType = {
  suppressNextSlideRef?: MutableRefObject<boolean>;
  handleGoNext: () => void;
  handleScrollNext: () => void;
  handleGoPrev: () => void;
  handleScrollPrev: () => void;
  handleGoToday: () => void;
  goToDate: (date: Date | string | number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setZoom: (level: ZoomLevel) => void;
  toggleDisplayActiveUnits: () => void;
  updateTilesCoords: (coords: Coords[]) => void;
  onClearFilterData?: () => void;
  data?: SchedulerData;
  tilesCoords: Coords[];
  zoom: ZoomLevel;
  isNextZoom: boolean;
  isPrevZoom: boolean;
  date: dayjs.Dayjs;
  isLoading: boolean;
  cols: number;
  startDate: Day;
  dayOfYear: number;
  recordsThreshold: number;
  config: Config;
};

export type CalendarProviderProps = {
  children: ReactNode;
  isLoading: boolean;
  defaultStartDate?: dayjs.Dayjs;
  data?: SchedulerData;
  config: Config;
  onRangeChange?: (range: ParsedDatesRange) => void;
  handleToggleDisplayActiveUnits?: () => void;
  onClearFilterData?: () => void;
};
