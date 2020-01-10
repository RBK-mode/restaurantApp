import { SET_ITEM, ADD_ITEM, EDIT_ITEM } from '../actions/constants';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ITEM:
      return [...action.payload];
    case ADD_ITEM:
      console.log(action.payload, 'jjjjjjjjjjjjjjjjjjjjjjjjjjj')
      return [...state, action.payload];
    case EDIT_ITEM:
      let items = state.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
      return items;
    default: return state;
  }
};

export default itemReducer;