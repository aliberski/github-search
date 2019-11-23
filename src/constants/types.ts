import { getI18n } from 'react-i18next';
import { NavigationScreenProp, SupportedThemes } from 'react-navigation';

export interface INavigation {
  navigation: NavigationScreenProp<any>;
}

export type T = (text: string) => string;

export interface IScreenProps {
  i18n: typeof getI18n;
}

export interface INavigationOptions extends INavigation {
  screenProps: IScreenProps;
  theme: SupportedThemes;
  navigationOptions: any;
}
