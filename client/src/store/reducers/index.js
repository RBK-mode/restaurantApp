import { combineReducers } from 'redux';
import adminReducer from './admin';
import categoryReducer from './categore';
import itemReducer from './item';
import menuReducer from './menu';
import customerReducer from './customer';

export default combineReducers({
    admin: adminReducer,
    cateogries: categoryReducer,
    items: itemReducer,
    menu: menuReducer,
    customers: customerReducer
});