import { SET_MENU, ADD_MENU_ITEM, DELETE_MENU_ITEM } from '../actions/constants';

const menuReducer = (state = [], action) => {
    switch (action.type) {
        case SET_MENU:
            return [...action.payload];
        case ADD_MENU_ITEM:
            return [action.payload, ...state];
        case DELETE_MENU_ITEM:
            let filtredItem = state.filter(item => {
                return item.itemId._id !== action.payload.itemId._id;
            });

            return filtredItem;
        default:
            return state;
    }
};

export default menuReducer;