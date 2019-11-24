const pad = (value: number): string => value.toString().padStart(2, '0');

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = pad(d.getMonth());
  const day = pad(d.getDate());
  return `${year}.${month}.${day}`;
};
