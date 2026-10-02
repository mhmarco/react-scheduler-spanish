export type GroupHeaderVariant = "category" | "subcontract" | "unassigned" | "provider";

export type GroupTone = "ok" | "warning";

export type GroupHeaderProps = {
  label: string;
  count: number;
  isCollapsed: boolean;
  onToggle: () => void;
  variant?: GroupHeaderVariant;
};
