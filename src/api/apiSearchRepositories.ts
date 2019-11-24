import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';

interface ISearchPayload {
  q: string;
  sort?: string;
  order?: string;
}

export default async ({ q, sort, order }: ISearchPayload) => {
  const { data } = await axios.get(`${API_BASE_URL}/search/repositories`, {
    params: {
      q,
      sort,
      order,
    },
  });
  return data;
};
