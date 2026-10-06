import { TilePulseKind, TileReadiness } from "@/types/global";
import { TileIconName } from "./icons";

// One palette for every driver and subcontract status, wherever it shows (tile, tooltip, pulse, and the consumer's
// own views through the exports below): red = the office has to act, amber = waiting on someone else, green = done,
// grey = nothing is due yet, blue = told, with nothing more expected.
export const STATUS_COLORS = {
  crit: "#C6483D",
  warn: "#D98A22",
  ok: "#2E8B63",
  info: "#2C6BB0",
  muted: "#9AA4B2"
} as const;

type StatusStyle = { icon: TileIconName; color: string; label: string };

// Single source for in-house driver-readiness presentation — the tile's status dot AND the tooltip's status row
// read from here (labels replace the removed legend). Spanish labels, matching the app.
export const READINESS: Record<TileReadiness, StatusStyle> = {
  sin_chofer: { icon: "warn", color: STATUS_COLORS.muted, label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: STATUS_COLORS.crit, label: "Pendiente de notificar" },
  programado: { icon: "dash", color: STATUS_COLORS.muted, label: "Pendiente de notificar" },
  por_confirmar: { icon: "clock", color: STATUS_COLORS.warn, label: "Notificado, esperando confirmación" },
  notificado: { icon: "clock", color: STATUS_COLORS.info, label: "Notificado" },
  confirmado: { icon: "check", color: STATUS_COLORS.ok, label: "Confirmado" }
};

// Subcontracts have no driver flow: the tooltip's status row shows the provider's confirmation instead.
export const SUBCONTRACT_STATUS: Record<"confirmed" | "unconfirmed", StatusStyle> = {
  confirmed: { icon: "check", color: STATUS_COLORS.ok, label: "Subcontrato confirmado" },
  unconfirmed: { icon: "clock", color: STATUS_COLORS.warn, label: "Subcontrato sin confirmar" }
};

/** A pulse takes the colour of the status it lands on; a lost confirmation is always the alert colour. */
export const tilePulseColor = (kind: TilePulseKind, readiness?: TileReadiness): string => {
  if (kind === "lost") return STATUS_COLORS.crit;
  if (kind === "confirmed") return STATUS_COLORS.ok;
  return readiness === "notificado" ? STATUS_COLORS.info : STATUS_COLORS.warn;
};
