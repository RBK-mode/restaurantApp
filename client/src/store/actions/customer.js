import { SET_CUSTOMER } from './constants';

export const setCustomer = (data) => {
  return {
    type: SET_CUSTOMER,
    payload: data
  }
};