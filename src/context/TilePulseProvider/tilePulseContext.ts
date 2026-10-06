import { createContext, useContext } from "react";
import { TilePulseKind } from "@/types/global";

export type ActiveTilePulse = {
  kind: TilePulseKind;
  /** Differs on every pulse of the same tile, so its animation restarts. */
  key: number;
  delayMs: number;
};

export const tilePulseContext = createContext<ReadonlyMap<string, ActiveTilePulse>>(new Map());

export const useTilePulses = () => useContext(tilePulseContext);
