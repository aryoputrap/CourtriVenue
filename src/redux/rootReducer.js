import {combineReducers} from 'redux';
import homeReducer from './reducers/homeReducer';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  order: orderReducer,
});

export default rootReducer;
