import {combineReducers} from 'redux';
import userReducer from './user';
import menuReducer from './menu';
import categoryReducer from './category';
import requestReducer from './request';

export default combineReducers({
  user: userReducer,
  menu: menuReducer,
  category: categoryReducer,
  request: requestReducer
})
