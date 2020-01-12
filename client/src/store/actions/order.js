import { SET_ORDER } from './constants';

export const setOrder = (data) => {
  return {
    type: SET_ORDER,
    payload: data
  }
};