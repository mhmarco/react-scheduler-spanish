import { FC, useCallback } from "react";
import { subcontractSeparatorHeight } from "@/constants";
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";

const getSepOffset = (rowIndex: number, separatorRowIndices: number[]): number => {
  let count = 0;
  for (const sepRow of separatorRowIndices) {
    if (rowIndex >= sepRow) count++;
  }
  return count * subcontractSeparatorHeight;
};

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
