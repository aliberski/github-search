import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getI18n } from 'react-i18next';

import AppNavigator from 'navigation/AppNavigator';

import { IScreenProps } from 'constants/types';
import './src/translation';
import getStoreInstance from 'store/createStore';
import rootSaga from 'store/saga';

const { store, persistor } = getStoreInstance();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator screenProps={{ i18n: getI18n } as IScreenProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
