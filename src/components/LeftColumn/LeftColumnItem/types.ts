import { SchedulerItemClickData, SchedulerRowLabel } from "@/types/global";

export type LeftColumnItemProps = {
  id: string;
  item: SchedulerRowLabel;
  rows: number;
  onItemClick?: (data: SchedulerItemClickData) => void;
  isSubcontract?: boolean;
  /** A unit inside a provider's sub-group: indented under the provider header, with a bus for an icon. */
  nested?: boolean;
};

export type StyledTextProps = {
  isMain?: boolean;
};

export type StyledLeftColumnItemWrapperProps = {
  rows: number;
  clickable: boolean;
  $isSubcontract?: boolean;
  $nested?: boolean;
};
