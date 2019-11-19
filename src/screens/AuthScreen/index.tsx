// route: AUTH
import React from 'react';
import { View, Text, Button } from 'react-native';
import { getI18n } from 'react-i18next';

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

AuthScreen.navigationOptions = {
  title: getI18n().t('Auth.title'),
};

export default AuthScreen;
