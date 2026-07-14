import { FC, useMemo } from "react";
import { createPortal } from "react-dom";
import { TimeRangeSelectionData } from "@/hooks/types";
import { useLanguage } from "@/context/LocaleProvider";
import {
  StyledToolbar,
  StyledSelectionCount,
  StyledButton,
  StyledButtonGroup,
  StyledSelectionInfo,
  StyledHint,
  StyledConflictWarning
} from "./styles";

export type MultiSelectToolbarProps = {
  selections: TimeRangeSelectionData[];
  onConfirm: () => void;
  onClear: () => void;
  onRemove: (index: number) => void;
};

const MultiSelectToolbar: FC<MultiSelectToolbarProps> = ({ selections, onConfirm, onClear }) => {
  const lang = useLanguage();
  const t = lang.multiSelect;

  // Count selections with conflicts
  const conflictCount = useMemo(() => {
    return selections.filter((s) => s.hasConflict).length;
  }, [selections]);

  // Fallback to English if translations not available
  const selectionText =
    selections.length === 1
      ? t?.selectionPending || "selection pending"
      : t?.selectionsPending || "selection(s) pending";
  const hintText = `${t?.clickToRemove || "Click × on selections to remove"} • ${t?.pressEscToClear || "Press Esc to clear all"}`;
  const clearText = t?.clearAll || "Clear All";
  const confirmText =
    selections.length === 1
      ? t?.confirmSelection || "Confirm Selection"
      : t?.confirmSelections || "Confirm Selections";
  const confirmWithConflictsText =
    selections.length === 1
      ? t?.confirmWithConflict || "Confirm with Conflict"
      : t?.confirmWithConflicts || "Confirm with Conflicts";
  const conflictText =
    conflictCount === 1
      ? t?.conflictWarning || "1 selection has conflicts"
      : t?.conflictsWarning?.replace("{count}", String(conflictCount)) ||
        `${conflictCount} selections have conflicts`;

  if (selections.length === 0) return null;

  const hasConflicts = conflictCount > 0;

  const toolbar = (
    <StyledToolbar $hasConflicts={hasConflicts} data-multi-select-ui>
      <StyledSelectionInfo>
        <StyledSelectionCount $hasConflicts={hasConflicts}>
          {selections.length} {selectionText}
        </StyledSelectionCount>
        {hasConflicts && <StyledConflictWarning>⚠️ {conflictText}</StyledConflictWarning>}
        <StyledHint>{hintText}</StyledHint>
      </StyledSelectionInfo>

      <StyledButtonGroup>
        <StyledButton variant="secondary" onClick={onClear}>
          ✕ {clearText}
        </StyledButton>
        <StyledButton variant="primary" $hasConflicts={hasConflicts} onClick={onConfirm}>
          {hasConflicts ? `⚠️ ${confirmWithConflictsText}` : `✓ ${confirmText}`}
        </StyledButton>
      </StyledButtonGroup>
    </StyledToolbar>
  );

  // Use portal to render at document body level
  return createPortal(toolbar, document.body);
};

export default MultiSelectToolbar;
