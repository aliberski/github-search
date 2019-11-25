import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['search', 'searchParams', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers,
);

let store: any;
let persistor: any;

function createInstance() {
  const instance = createStore(
    persistedReducer,
    initialState,
    composedEnhancers,
  );
  return instance;
}

export default function getStoreInstance() {
  store = store || createInstance();
  persistor = persistor || persistStore(store);
  store.runSaga = sagaMiddleware.run;
  return { store, persistor };
}
