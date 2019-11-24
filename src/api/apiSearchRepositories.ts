import { API_BASE_URL } from 'react-native-dotenv';

interface ISearchPayload {
  q: string;
  sort?: string;
  order?: string;
}

export default async ({ q, sort, order }: ISearchPayload) => {
  const qParam = `?q=${q}`;
  const sortParam = sort ? `&sort=${sort}` : '';
  const orderParam = order ? `&order=${order}` : '';

  const response = await fetch(
    `${API_BASE_URL}/search/repositories${qParam}${sortParam}${orderParam}`,
  );

  return await response.json();
};
