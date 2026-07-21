import { TileReadiness } from "@/types/global";
import { TileIconName } from "./icons";

// Single source for in-house driver-readiness presentation — the tile's left stripe + status dot AND the tooltip's
// status row read from here (labels replace the removed legend). Spanish labels, matching the app.
export const READINESS: Record<
  TileReadiness,
  { stripe: string; icon: TileIconName; color: string; label: string }
> = {
  sin_chofer: { stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2", label: "Sin chofer" },
  sin_avisar: { stripe: "#D98A22", icon: "warn", color: "#D98A22", label: "Sin avisar" },
  notificado: { stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0", label: "Notificado" },
  confirmado: { stripe: "#2E8B63", icon: "check", color: "#2E8B63", label: "Confirmado" }
};
