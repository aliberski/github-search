// route: AUTH
import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ScreenWrapper from 'components/ScreenWrapper';
import ButtonGithub from 'components/ButtonGithub';

import { INavigationOptions } from 'constants/types';
import apiLogin from 'api/apiLogin';
import apiGetAccessToken from 'api/apiGetAccessToken';
import routes from 'navigation/routes';
import { IProps } from './types';
import style from './style';
import userActions from 'controllers/User/actions';

const AuthScreen = (props: IProps) => {
  const { t } = useTranslation();

  const handleOpenURL = async ({ url }: { url: string }) => {
    const loginCode = url.split('code=').pop();
    if (loginCode) {
      const token = await apiGetAccessToken(loginCode);
      props.setAccessToken(token);
    } else {
      // handle error message
      // NOTE: navigate home screen as a fallback so far
      props.navigation.navigate(routes.HOME);
    }
  };

  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);
    () => {
      Linking.removeEventListener('url', handleOpenURL);
    };
  }, []);

  return (
    <ScreenWrapper style={style.container}>
      <ButtonGithub onPress={apiLogin} text={t('Auth.buttonGithub')} />
    </ScreenWrapper>
  );
};

AuthScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Auth.title'),
});

const mapDispatchToProps = {
  setAccessToken: userActions.setAccessToken,
};

export default connect(null, mapDispatchToProps)(AuthScreen);
