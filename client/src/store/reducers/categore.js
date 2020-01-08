import { SET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY} from '../actions/constants'

const categoryReducer = (state = [], action) => {
    switch(action.type){
        case SET_CATEGORY: 
            return [...action.payload]
        case ADD_CATEGORY:
            return [...state, action.payload]
        case EDIT_CATEGORY: 
            let categories = state.map((category) =>{
                if(category._id === action.payload._id){
                    return action.payload;
                }
                return category;
            });
            return categories;
        default: return state;
    }
}
export default categoryReducer;
