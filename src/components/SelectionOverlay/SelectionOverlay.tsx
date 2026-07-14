import { FC } from "react";
import { SelectionOverlayProps } from "./types";
import { StyledSelectionBox } from "./styles";

const SelectionOverlay: FC<SelectionOverlayProps> = ({ selectionBox, isSelecting }) => {
  if (!selectionBox || !isSelecting) return null;

  return (
    <StyledSelectionBox
      style={{
        left: selectionBox.x,
        top: selectionBox.y,
        width: selectionBox.width,
        height: selectionBox.height
      }}
    />
  );
};

export default SelectionOverlay;
