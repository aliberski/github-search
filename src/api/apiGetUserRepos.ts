import { API_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';

export default async (accessToken: string | null) => {
  if (!accessToken) {
    return [];
  }
  const { data } = await axios.get(
    `${API_BASE_URL}/user/repos?access_token=${accessToken}`,
  );
  return data;
};
