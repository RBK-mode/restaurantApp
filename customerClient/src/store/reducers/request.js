import { REQUEST_ORDER, REQUEST_STATE } from '../actions/constants'

const requestReducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_ORDER:
        return action.payload;
      case REQUEST_STATE: 
        return {
          ...state,
          state: action.payload
        }
      default:
        return state;
    }
}

export default requestReducer;
