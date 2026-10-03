import { useCallback, useEffect, useRef, useState } from "react";
import { canvasHeaderWrapperId, leftColumnWidth, outsideWrapperId } from "@/constants";
import { ActiveTilePulse } from "@/context/TilePulseProvider";
import { TilePulse } from "@/types/global";

// The longest pulse animation (the lingering outline) plus the largest stagger.
const PULSE_LIFETIME_MS = 10_500;
const STAGGER_MS = 60;
const MAX_STAGGER_MS = 600;

// On screen = inside the board's scroll viewport, clear of the sticky left column and the sticky header.
const isTileOnScreen = (segmentId: string) => {
  const viewport = document.getElementById(outsideWrapperId);
  const tile = viewport?.querySelector<HTMLElement>(`[data-segment-id="${CSS.escape(segmentId)}"]`);
  if (!viewport || !tile) return false;
  const view = viewport.getBoundingClientRect();
  const header = document.getElementById(canvasHeaderWrapperId)?.getBoundingClientRect();
  const box = tile.getBoundingClientRect();
  const top = Math.max(header?.bottom ?? view.top, view.top, 0);
  const bottom = Math.min(view.bottom, window.innerHeight);
  return (
    box.width > 0 &&
    box.right > view.left + leftColumnWidth &&
    box.left < view.right &&
    box.bottom > top &&
    box.top < bottom
  );
};

/** State behind `SchedulerRef.pulseTiles`: which tiles are pulsing right now, each cleared once its animation ends. */
export const useTilePulseState = () => {
  const [pulses, setPulses] = useState<ReadonlyMap<string, ActiveTilePulse>>(() => new Map());
  const seqRef = useRef(0);
  const timersRef = useRef(new Set<ReturnType<typeof setTimeout>>());

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const pulseTiles = useCallback((requested: TilePulse[]): string[] => {
    const shown = requested.filter((pulse) => isTileOnScreen(pulse.segmentId));
    if (!shown.length) return [];

    const key = ++seqRef.current;
    const batch = new Map<string, ActiveTilePulse>(
      shown.map((pulse, i) => [
        pulse.segmentId,
        { kind: pulse.kind, key, delayMs: Math.min(i * STAGGER_MS, MAX_STAGGER_MS) }
      ])
    );
    setPulses((current) => new Map([...Array.from(current), ...Array.from(batch)]));

    const timer = setTimeout(() => {
      timersRef.current.delete(timer);
      setPulses((current) => {
        const next = new Map(current);
        batch.forEach((_, segmentId) => {
          if (next.get(segmentId)?.key === key) next.delete(segmentId);
        });
        return next;
      });
    }, PULSE_LIFETIME_MS);
    timersRef.current.add(timer);

    return shown.map((pulse) => pulse.segmentId);
  }, []);

  return { pulses, pulseTiles };
};
