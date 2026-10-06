import { FC } from "react";
import { TileIcon } from "../Tiles/Tile/icons";
import { READINESS } from "../Tiles/Tile/readiness";
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
const STATES = [READINESS.sin_chofer, READINESS.sin_avisar, READINESS.por_confirmar, READINESS.confirmado];

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
        <StyledStripe style={{ background: s.color }} />
        <StyledDot style={{ color: s.color }}>
          <TileIcon name={s.icon} strokeWidth={s.icon === "check" ? 2.6 : 2.2} />
        </StyledDot>
        {s.label}
      </StyledState>
    ))}
  </StyledLegend>
);

export default Legend;
