// route: AUTH
import React from 'react';
import { View, Button } from 'react-native';

import ScreenWrapper from 'components/ScreenWrapper';

import { INavigationOptions } from 'constants/types';
import routes from 'navigation/routes';
import { IProps } from './types';
import style from './style';

const AuthScreen = (props: IProps) => {
  return (
    <ScreenWrapper style={style.container}>
      <Button
        onPress={() => {
          props.navigation.navigate(routes.HOME);
        }}
        title="go home"
      />
    </ScreenWrapper>
  );
};

AuthScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Auth.title'),
});

export default AuthScreen;
