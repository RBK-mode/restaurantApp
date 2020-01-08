import {combineReducers} from 'redux';
import adminReducer from './admin';
import categoryReducer from './categore';

export default combineReducers({
  admin: adminReducer,
  cateogries: categoryReducer
})
