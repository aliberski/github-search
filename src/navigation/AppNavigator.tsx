import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from 'screens/AuthScreen/index';
import HomeScreen from 'screens/HomeScreen/index';
import routes from 'navigation/routes';

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

export default createAppContainer(SwitchNavigator);
