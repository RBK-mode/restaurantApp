import { combineReducers } from 'redux';
import adminReducer from './admin';
import categoryReducer from './categore';
import itemReducer from './item';
import menuReducer from './menu';

export default combineReducers({
    admin: adminReducer,
    cateogries: categoryReducer,
    items: itemReducer,
    menu: menuReducer
});