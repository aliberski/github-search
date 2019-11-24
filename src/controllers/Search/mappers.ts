import { ISearchResult } from './types';

export const mapRepositoriesData = (
  items: any[],
  limit: number,
): ISearchResult[] => {
  const results: any[] = items.map((item: any) => {
    if (!item || !item.id || !item.name) return;
    return {
      id: item.id && item.id.toString(),
      name: item.name,
      owner: item.owner && item.owner.login,
      stars: item.stargazers_count && item.stargazers_count.toString(),
      createdAt: item.created_at,
    };
  });
  const filtered = results.filter((item: any): ISearchResult[] => item);
  return filtered.slice(0, limit);
};
