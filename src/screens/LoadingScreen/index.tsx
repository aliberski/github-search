// route: LOADING
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { IStoreState } from 'store/index';
import { COLOR } from 'constants/commonStyle';
import routes from 'navigation/routes';
import { IProps } from './types';
import style from './style';

// NOTE: placeholder screen displayed when authorization state is
// unknown on application start
const LoadingScreen = (props: IProps) => {
  const {
    navigation: { navigate },
    accessToken,
  } = props;
  useEffect(() => {
    const navigationRoute = accessToken ? routes.HOME : routes.AUTH;
    navigate(navigationRoute);
  }, [accessToken]);

  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={COLOR.font} />
    </View>
  );
};

const mapStateToProps = ({ user }: IStoreState) => ({
  accessToken: user.accessToken,
});

export default connect(mapStateToProps)(LoadingScreen);
