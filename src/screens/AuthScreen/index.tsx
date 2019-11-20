// route: AUTH
import React from 'react';
import { View, Text, Button } from 'react-native';
import { getI18n } from 'react-i18next';

import { INavigationOptions } from 'constants/types';
import routes from 'navigation/routes';
import { IProps } from './types';
import style from './style';

const AuthScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Button
        onPress={() => {
          props.navigation.navigate(routes.HOME);
        }}
        title="go home"
      />
    </View>
  );
};

AuthScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Auth.title'),
});

export default AuthScreen;
