import { NEW_REQUEST, APPROVE_REQUEST, REJECT_REQUEST } from '../actions/constants';

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_REQUEST:
      return [...state, action.payload];
    case APPROVE_REQUEST: 
        return state.filter( order => order._id !== action.payload)
    case REJECT_REQUEST: 
        return state.filter( order => order._id !== action.payload)
    default: return state;
  }
};

export default requestReducer;