import { SET_CATEGORY, EDIT_CATEGORY, ADD_CATEGORY } from './constants';

export const setCategory = (data) => {
    return {
        type: SET_CATEGORY,
        payload: data
    }
}

export const addCategory = (data) => {
    return {
        type: ADD_CATEGORY,
        payload: data
    }
}

export const editCategory = (data) => {
    return {
        type: EDIT_CATEGORY,
        payload: data
    }
}