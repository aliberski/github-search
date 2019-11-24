import React, { useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';

import AuthScreen from 'screens/AuthScreen/index';
import HomeScreen from 'screens/HomeScreen/index';

import routes from 'navigation/routes';
import { IProps } from './types';
import { IStoreState } from 'store/index';

const AuthStack = createStackNavigator({
  [routes.AUTH]: { screen: AuthScreen, path: 'auth' },
});

const MainStack = createStackNavigator({
  [routes.HOME]: { screen: HomeScreen, path: 'home' },
});

const SwitchNavigator = createSwitchNavigator({
  AuthStack,
  MainStack,
});

const AppNavigator = (props: IProps) => {
  const { accessToken, ...restProps } = props;
  useEffect(() => {
    // NOTE: handle auth navigation
    if (accessToken) {
      restProps.navigation.navigate(routes.HOME);
    }
  }, [accessToken]);
  return <SwitchNavigator {...restProps} />;
};

AppNavigator.router = SwitchNavigator.router;

const ConnectedAppNavigator = connect(({ user }: IStoreState) => ({
  accessToken: user.accessToken,
}))(AppNavigator) as any;

export default createAppContainer(ConnectedAppNavigator);
