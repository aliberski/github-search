import {
  OAUTH_BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRED,
} from 'react-native-dotenv';
import axios from 'axios';

export default async (code: string) => {
  const { data } = await axios.post(
    `${OAUTH_BASE_URL}/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRED}&code=${code}`,
  );
  try {
    return data.split('&scope')[0].replace('access_token=', '');
  } catch (_) {
    return null;
  }
};
