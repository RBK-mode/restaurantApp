import { SET_MENU, ADD_MENU_ITEM, DELETE_MENU_ITEM } from './constants';

export const setMenu = (data) => {
    return {
        type: SET_MENU,
        payload: data
    }
};

export const addMenuItem = (data) => {
    return {
        type: ADD_MENU_ITEM,
        payload: data
    }
};

export const deleteMenuItem = (data) => {
    return {
        type: DELETE_MENU_ITEM,
        payload: data
    }
};