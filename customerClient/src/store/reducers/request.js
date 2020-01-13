import { REQUEST_ORDER } from '../actions/constants'

const requestReducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_ORDER:
        return action.payload;
      default:
        return state;
    }
}

export default requestReducer;
