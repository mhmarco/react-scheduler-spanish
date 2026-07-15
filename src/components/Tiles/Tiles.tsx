import { FC, useCallback } from "react";
import styled from "styled-components";
import { boxHeight, subcontractSeparatorHeight } from "@/constants";
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";

const getSepOffset = (rowIndex: number, separatorRowIndices: number[]): number => {
  let count = 0;
  for (const sepRow of separatorRowIndices) {
    if (rowIndex >= sepRow) count++;
  }
  return count * subcontractSeparatorHeight;
};

// "DISPONIBLE" watermark on a unit row with no events (mockup 91ed97bb .dispo).
const StyledDispo = styled.div`
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
`;

const Tiles: FC<TilesProps> = ({
  data,
  zoom,
  onTileClick,
  onDragStart,
  isDraggable,
  draggingEventId,
  separatorRowIndices = []
}) => {
  const placeTiles = useCallback((): PlacedTiles => {
    let rows = 0;
    return data
      .map((person, personIndex) => {
        if (personIndex > 0) {
          rows += Math.max(data[personIndex - 1].data.length, 1);
        }
        if (!person.data.some((r) => r.length > 0)) {
          const yOffset = getSepOffset(rows, separatorRowIndices);
          return [
            <StyledDispo key={`dispo-${person.id}`} style={{ top: `${rows * boxHeight + yOffset}px` }}>
              Disponible
            </StyledDispo>
          ];
        }
        return person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => {
            const isDraggingThis = draggingEventId === project.segmentId;
            const isTileDraggable = isDraggable ? isDraggable(project) : false;
            const absoluteRow = rowIndex + rows;
            const yOffset = getSepOffset(absoluteRow, separatorRowIndices);

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
              />
            );
          })
        );
      })
      .flat(2);
  }, [data, onTileClick, zoom, onDragStart, isDraggable, draggingEventId, separatorRowIndices]);

  return <>{placeTiles()}</>;
};

export default Tiles;
