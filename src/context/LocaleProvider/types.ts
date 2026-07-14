import { ReactNode } from "react";
import { LangCodes } from "@/types/global";

export type LocaleContextType = {
  currentLocale: LocaleType;
  localesData: LocaleType[];
  setCurrentLocale: (locale: LocaleType) => void;
};

export type LocaleProviderProps = {
  children: ReactNode;
  lang?: LangCodes | string;
  translations?: LocaleType[];
};

export type Topbar = {
  filters: string;
  next: string;
  prev: string;
  today: string;
  view: string;
};

export type Conflicts = {
  detected: string;
  detectedPlural: string;
  detectedSuffix: string;
  conflictsWith: string;
  movingTo: string;
  currentlyAt: string;
  conflictTime: string;
  to: string;
  nearbyEvent: string;
  nearbyEvents: string;
  before: string;
  after: string;
  gap: string;
  yourEvent: string;
  sameDay: string;
  changeStart: string;
  changeEnd: string;
  changeBoth: string;
};

export type MultiSelect = {
  selectionsPending: string;
  selectionPending: string;
  clickToRemove: string;
  pressEscToClear: string;
  clearAll: string;
  confirmSelection: string;
  confirmSelections: string;
  conflictWarning: string;
  conflictsWarning: string;
  confirmWithConflict: string;
  confirmWithConflicts: string;
};

export type Tooltip = {
  client: string;
  schedule: string;
  startDate: string;
  endDate: string;
  groupName: string;
  driver: string;
  flightNumber: string;
  serviceNotes: string;
  reservationNotes: string;
  tour: string;
  transfer: string;
};

export type Translation = {
  feelingEmpty: string;
  free: string;
  loadNext: string;
  loadPrevious: string;
  over: string;
  taken: string;
  topbar: Topbar;
  search: string;
  week: string;
  conflicts: Conflicts;
  multiSelect?: MultiSelect;
  tooltip?: Tooltip;
  subcontract?: string;
};

export type LocaleType = {
  id: string;
  lang: Translation;
  translateCode: string;
  dayjsTranslations: string | ILocale | undefined;
};
