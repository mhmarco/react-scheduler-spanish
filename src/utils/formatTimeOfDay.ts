import dayjs from "dayjs";

export type HourFormat = "12h" | "24h";

/**
 * Canonical time-of-day render honoring the tenant setting.
 * 12h → "2:30 PM" (dayjs `A` = uppercase AM/PM); 24h → "14:30" (zero-padded).
 */
export const formatTimeOfDay = (value: dayjs.ConfigType, hourFormat: HourFormat = "12h"): string =>
  dayjs(value).format(hourFormat === "24h" ? "HH:mm" : "h:mm A");
