import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  // transforms: [immutableTransform()],
  storage: AsyncStorage,
  whitelist: ['home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export default () => {
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));

  // const store = createStore(persistedReducer, enhancer);
  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return {store, persistor};
};
