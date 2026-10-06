import { FC, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { subcontractSeparatorHeight } from "@/constants";
import { useTilePulses } from "@/context/TilePulseProvider";
import { GhostProjectData, SchedulerProjectData } from "@/types/global";
import { Tile } from "..";
import { TilesProps } from "./types";

type ExitDesc = {
  project: SchedulerProjectData;
  absoluteRow: number;
  yOffset: number;
  isSubcontract: boolean;
  /** Already faded out with its collapsing group: it leaves without an exit of its own. */
  faded: boolean;
};

const getSepOffset = (rowIndex: number, separatorRowIndices: number[]): number => {
  let count = 0;
  for (const sepRow of separatorRowIndices) {
    if (rowIndex >= sepRow) count++;
  }
  return count * subcontractSeparatorHeight;
};

// A ghost's synthetic tile only needs the fields the placement + ghost render read; the rest are inert stubs.
const ghostToProject = (g: GhostProjectData): SchedulerProjectData => ({
  segmentId: g.segmentId,
  reservationId: g.reservationId,
  startDate: g.startDate,
  endDate: g.endDate,
  occupancy: 0,
  title: g.title,
  bookingNumber: "",
  eventType: g.eventType
});

const Tiles: FC<TilesProps> = ({
  data,
  zoom,
  onTileClick,
  onTileContextMenu,
  onDragStart,
  isDraggable,
  draggingEventId,
  separatorRowIndices = [],
  fadingUnitIds,
  highlightedSegmentId,
  focusedUnitIds,
  leavingSegmentIds,
  ghostProject
}) => {
  const pulses = useTilePulses();
  const { nodes, liveMap } = useMemo(() => {
    const liveMap = new Map<string, ExitDesc>();
    const focusActive = !!focusedUnitIds && focusedUnitIds.length > 0;
    let rows = 0;
    const nodes = data
      .map((person, personIndex) => {
        if (personIndex > 0) {
          rows += Math.max(data[personIndex - 1].data.length, 1);
        }
        const unitFading = !!fadingUnitIds?.has(person.id);
        const isDimmed = focusActive && !focusedUnitIds!.includes(person.id);
        const baseYOffset = getSepOffset(rows, separatorRowIndices);
        // The ghost lands on this row's base slot when it targets this unit (works for a free/Disponible unit too).
        const ghostEl =
          ghostProject && person.id === ghostProject.targetUnitId ? (
            <Tile
              key={`ghost-${person.id}`}
              row={rows}
              data={ghostToProject(ghostProject)}
              zoom={zoom}
              yOffset={baseYOffset}
              isDragging={false}
              isDraggable={false}
              ghost
              ghostBadge={ghostProject.badge}
            />
          ) : null;

        // Empty unit row: no watermark — just host the drag ghost when it targets this free unit.
        if (!person.data.some((r) => r.length > 0)) {
          return ghostEl ? [ghostEl] : [];
        }
        const tileEls = person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => {
            const isDraggingThis = draggingEventId === project.segmentId;
            const isTileDraggable = isDraggable ? isDraggable(project) : false;
            const absoluteRow = rowIndex + rows;
            const yOffset = getSepOffset(absoluteRow, separatorRowIndices);
            liveMap.set(project.segmentId, {
              project,
              absoluteRow,
              yOffset,
              isSubcontract: !!person.isSubcontract,
              faded: unitFading
            });

            return (
              <Tile
                key={project.segmentId}
                row={absoluteRow}
                data={project}
                zoom={zoom}
                isSubcontract={person.isSubcontract}
                onTileClick={onTileClick}
                onTileContextMenu={onTileContextMenu}
                onDragStart={onDragStart}
                isDragging={isDraggingThis}
                isDraggable={isTileDraggable}
                yOffset={yOffset}
                exiting={unitFading}
                highlighted={highlightedSegmentId != null && project.segmentId === highlightedSegmentId}
                dimmed={isDimmed}
                leaving={!!leavingSegmentIds?.includes(project.segmentId)}
                pulse={pulses.get(project.segmentId)}
              />
            );
          })
        );
        return ghostEl ? [...tileEls, [ghostEl]] : tileEls;
      })
      .flat(2);
    return { nodes, liveMap };
  }, [data, onTileClick, onTileContextMenu, zoom, onDragStart, isDraggable, draggingEventId, separatorRowIndices, fadingUnitIds, highlightedSegmentId, focusedUnitIds, leavingSegmentIds, ghostProject, pulses]);

  // Exit animation: keep a just-removed tile mounted with `exiting` for a beat so it fades out before unmounting.
  // Timers drop only their own batch and are cleared on unmount, so overlapping removals don't cancel each other.
  const prevMapRef = useRef<Map<string, ExitDesc>>(new Map());
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [exiting, setExiting] = useState<ExitDesc[]>([]);

  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  useEffect(() => {
    const prev = prevMapRef.current;
    prevMapRef.current = liveMap;
    const removed: ExitDesc[] = [];
    prev.forEach((desc, id) => {
      if (!liveMap.has(id) && !desc.faded) removed.push(desc);
    });
    setExiting((cur) => {
      let next = cur.filter((e) => !liveMap.has(e.project.segmentId));
      for (const r of removed) {
        if (!next.some((e) => e.project.segmentId === r.project.segmentId)) next = [...next, r];
      }
      return next;
    });
    if (!removed.length) return;
    const ids = new Set(removed.map((r) => r.project.segmentId));
    const timer = setTimeout(() => {
      setExiting((cur) => cur.filter((e) => !ids.has(e.project.segmentId)));
    }, 220);
    timersRef.current.push(timer);
  }, [liveMap]);

  // Tiles that left in THIS render, before the effect above moves them into `exiting`: rendered now so the exit
  // starts at once instead of after a frame without them. A collapsing group's tiles are already faded out, so they
  // just go — giving them an exit too remounted them at full opacity and faded them out a second time.
  const justLeft: ExitDesc[] = [];
  if (prevMapRef.current !== liveMap) {
    prevMapRef.current.forEach((desc, id) => {
      if (!liveMap.has(id) && !desc.faded && !exiting.some((e) => e.project.segmentId === id)) justLeft.push(desc);
    });
  }

  // Render live + exiting tiles as ONE array keyed by segmentId, so React PRESERVES the node when a tile goes
  // live → exiting (same key, same array) and the $exiting opacity/scale transition fades it out. Two separate
  // array-children ({nodes}{exiting}) would remount the exiting tile at opacity 0 and tileIn would fade it back IN.
  // Filter out any that reappeared in liveMap this render to avoid a duplicate key.
  const exitingEls = [...exiting, ...justLeft]
    .filter((e) => !liveMap.has(e.project.segmentId))
    .map((e) => (
      <Tile
        key={e.project.segmentId}
        row={e.absoluteRow}
        data={e.project}
        zoom={zoom}
        isSubcontract={e.isSubcontract}
        yOffset={e.yOffset}
        isDragging={false}
        isDraggable={false}
        exiting
      />
    ));

  return <>{[...nodes, ...exitingEls]}</>;
};

export default Tiles;
