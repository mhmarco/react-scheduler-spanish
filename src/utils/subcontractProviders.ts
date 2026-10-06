import { PaginatedSchedulerRow } from "@/types/global";

export const SUBCONTRACT_GROUP_ID = "__subcontract__";

export const providerGroupId = (providerId: string) => `${SUBCONTRACT_GROUP_ID}:${providerId}`;

export type ProviderGroup = { id: string; name: string; items: PaginatedSchedulerRow[] };

/** Subcontract rows split into those under no provider and one sub-group per provider, sorted by name. */
export const splitByProvider = (items: PaginatedSchedulerRow[]) => {
  const loose: PaginatedSchedulerRow[] = [];
  const byId = new Map<string, ProviderGroup>();
  for (const item of items) {
    if (!item.provider) {
      loose.push(item);
      continue;
    }
    const group = byId.get(item.provider.id) ?? { id: item.provider.id, name: item.provider.name, items: [] };
    group.items.push(item);
    byId.set(item.provider.id, group);
  }
  const providers = [...byId.values()].sort((a, b) => a.name.localeCompare(b.name));
  return { loose, providers };
};
