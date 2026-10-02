import { TileReadiness } from "@/types/global";
import { TileIconName } from "./icons";

// Single source for in-house driver-readiness presentation — the tile's status dot AND the tooltip's status row
// read from here (labels replace the removed legend). Spanish labels, matching the app.
export const READINESS: Record<
  TileReadiness,
  { icon: TileIconName; color: string; label: string }
> = {
  sin_chofer: { icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { icon: "warn", color: "#D98A22", label: "No notificado al chofer" },
  programado: { icon: "warn", color: "#C2A878", label: "Notificación programada" },
  notificado: { icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { icon: "check", color: "#2E8B63", label: "Confirmado" }
};

// Subcontracts have no driver flow: the tooltip's status row shows the provider's confirmation instead.
export const SUBCONTRACT_STATUS: Record<"confirmed" | "unconfirmed", { icon: TileIconName; color: string; label: string }> = {
  confirmed: { icon: "check", color: "#2E8B63", label: "Subcontrato confirmado" },
  unconfirmed: { icon: "clock", color: "#D98A22", label: "Subcontrato sin confirmar" }
};
