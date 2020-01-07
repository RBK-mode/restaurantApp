import {LOGIN} from '../actions/constants'

const adminReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
        return action.payload
      default:
        return state
    }
}

export default adminReducer;
