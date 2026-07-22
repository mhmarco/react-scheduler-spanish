import { FC, useEffect, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { boxHeight, subcontractSeparatorHeight } from "@/constants";
import { GhostProjectData, SchedulerProjectData } from "@/types/global";
import { Tile } from "..";
import { TilesProps } from "./types";

type ExitDesc = { project: SchedulerProjectData; absoluteRow: number; yOffset: number; isSubcontract: boolean };

const getSepOffset = (rowIndex: number, separatorRowIndices: number[]): number => {
  let count = 0;
  for (const sepRow of separatorRowIndices) {
    if (rowIndex >= sepRow) count++;
  }
  return count * subcontractSeparatorHeight;
};

const dispoIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const dispoOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// "DISPONIBLE" watermark on a unit row with no events (mockup 91ed97bb .dispo). Fades out with the group on collapse
// via a keyframe (not a transition) for the same reason as the tiles — a transition jumps on remount.
const StyledDispo = styled.div<{ $fading?: boolean; $dimmed?: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  height: ${boxHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${dispoIn} 200ms ease-out;
  }
  ${({ $fading }) =>
    $fading &&
    css`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${dispoOut} 180ms ease forwards;
      }
    `}
  ${({ $dimmed }) => $dimmed && "opacity: 0.28;"}
`;

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

        if (!person.data.some((r) => r.length > 0)) {
          const dispoEls: JSX.Element[] = [
            <StyledDispo
              key={`dispo-${person.id}`}
              $fading={unitFading}
              $dimmed={isDimmed}
              style={{ top: `${rows * boxHeight + baseYOffset}px` }}>
              Disponible
            </StyledDispo>
          ];
          if (ghostEl) dispoEls.push(ghostEl);
          return dispoEls;
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
              isSubcontract: !!person.isSubcontract
            });

            return (
              <Tile
                key={project.segmentId}
                row={absoluteRow}
                data={project}
                zoom={zoom}
                isSubcontract={person.isSubcontract}
                onTileClick={onTileClick}
                onDragStart={onDragStart}
                isDragging={isDraggingThis}
                isDraggable={isTileDraggable}
                yOffset={yOffset}
                exiting={unitFading}
                highlighted={highlightedSegmentId != null && project.segmentId === highlightedSegmentId}
                dimmed={isDimmed}
                leaving={!!leavingSegmentIds?.includes(project.segmentId)}
              />
            );
          })
        );
        return ghostEl ? [...tileEls, [ghostEl]] : tileEls;
      })
      .flat(2);
    return { nodes, liveMap };
  }, [data, onTileClick, zoom, onDragStart, isDraggable, draggingEventId, separatorRowIndices, fadingUnitIds, highlightedSegmentId, focusedUnitIds, leavingSegmentIds, ghostProject]);

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
      if (!liveMap.has(id)) removed.push(desc);
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

  // Render live + exiting tiles as ONE array keyed by segmentId, so React PRESERVES the node when a tile goes
  // live → exiting (same key, same array) and the $exiting opacity/scale transition fades it out. Two separate
  // array-children ({nodes}{exiting}) would remount the exiting tile at opacity 0 and tileIn would fade it back IN.
  // Filter out any that reappeared in liveMap this render to avoid a duplicate key.
  const exitingEls = exiting
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
