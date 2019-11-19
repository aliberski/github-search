// route: AUTH
import React from 'react';
import { View, Text, Button } from 'react-native';

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
  title: 'Auth Screen',
};

export default AuthScreen;
