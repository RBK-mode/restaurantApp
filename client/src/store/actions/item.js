import { SET_ITEM, ADD_ITEM, EDIT_ITEM } from './constants';

export const setItem = (data) => {
  return {
    type: SET_ITEM,
    payload: data
  }
};

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data
  }
};

export const editItem = (data) => {
  return {
    type: EDIT_ITEM,
    payload: data
  }
};