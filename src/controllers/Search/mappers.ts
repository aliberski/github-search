import { ISearchResult } from './types';

const pad = (value: number): string => value.toString().padStart(2, '0');

const formatDate = (dateStr: string) => {
  if (!dateStr) return;
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = pad(d.getMonth());
  const day = pad(d.getDate());
  return `${year}.${month}.${day}`;
};

export const mapRepositoriesData = (items: any[]): ISearchResult[] => {
  const results: any[] = items.map((item: any) => {
    if (!item || !item.id || !item.name) return;
    return {
      id: item.id && item.id.toString(),
      name: item.name,
      owner: item.owner && item.owner.login,
      stars: item.stargazers_count && item.stargazers_count.toString(),
      createdAt: formatDate(item.created_at),
    };
  });
  return results.filter((item: any): ISearchResult[] => item);
};
