export type GroupHeaderProps = {
  label: string;
  count: number;
  isCollapsed: boolean;
  onToggle: () => void;
  variant?: "category" | "subcontract";
};
