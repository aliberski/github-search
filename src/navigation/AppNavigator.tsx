import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from 'screens/AuthScreen/index';
import HomeScreen from 'screens/HomeScreen/index';
import routes from 'navigation/routes';

const AuthStack = createStackNavigator({
  [routes.AUTH]: AuthScreen,
});

const MainStack = createStackNavigator({
  [routes.HOME]: HomeScreen,
});

const SwitchNavigator = createSwitchNavigator({
  AuthStack,
  MainStack,
});

export default createAppContainer(SwitchNavigator);
