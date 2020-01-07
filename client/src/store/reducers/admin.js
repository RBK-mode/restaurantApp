import {ADMIN_LOGIN} from '../actions/constants'

const adminReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_LOGIN:
        return action.payload
      default:
        return state
    }
}

export default adminReducer;
