import { SET_ORDER, ADD_ORDER } from './constants';

export const setOrder = (data) => {
  return {
    type: SET_ORDER,
    payload: data
  }
};

export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload
  }
};