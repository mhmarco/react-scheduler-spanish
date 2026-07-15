import { FC } from "react";
import { TileIcon } from "../Tiles/Tile/icons";
import {
  StyledLegend,
  StyledLabel,
  StyledItem,
  StyledSubPill,
  StyledSep,
  StyledState,
  StyledStripe,
  StyledDot
} from "./styles";

// Always-visible legend strip explaining the tile icons + the two-indicator readiness system (mockup .legend).
const STATES: { label: string; stripe: string; icon: "warn" | "clock" | "check"; color: string }[] = [
  { label: "Sin chofer", stripe: "#9AA4B2", icon: "warn", color: "#9AA4B2" },
  { label: "Sin avisar", stripe: "#D98A22", icon: "warn", color: "#D98A22" },
  { label: "Notificado", stripe: "#2C6BB0", icon: "clock", color: "#2C6BB0" },
  { label: "Confirmado", stripe: "#2E8B63", icon: "check", color: "#2E8B63" }
];

const Legend: FC = () => (
  <StyledLegend>
    <StyledLabel>Leyenda</StyledLabel>
    <StyledItem>
      <TileIcon name="transfer" /> Transfer
    </StyledItem>
    <StyledItem>
      <TileIcon name="sun" /> Gira 1 día
    </StyledItem>
    <StyledItem>
      <TileIcon name="tour" /> Gira multidía
    </StyledItem>
    <StyledItem>
      <StyledSubPill>SUB</StyledSubPill> Subcontrato
    </StyledItem>
    <StyledSep />
    <StyledLabel>
      Estado <em>franja izq. + punto esq.</em>
    </StyledLabel>
    {STATES.map((s) => (
      <StyledState key={s.label}>
        <StyledStripe style={{ background: s.stripe }} />
        <StyledDot style={{ color: s.color }}>
          <TileIcon name={s.icon} strokeWidth={s.icon === "check" ? 2.6 : 2.2} />
        </StyledDot>
        {s.label}
      </StyledState>
    ))}
  </StyledLegend>
);

export default Legend;
