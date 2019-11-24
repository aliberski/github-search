import { OAUTH_BASE_URL, GITHUB_CLIENT_ID } from 'react-native-dotenv';
import { Linking } from 'react-native';

export default () => {
  Linking.openURL(
    `${OAUTH_BASE_URL}/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=githubsearch://auth`,
  );
};
