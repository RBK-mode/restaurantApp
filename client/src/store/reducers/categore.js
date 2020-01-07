import { SET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY} from '../actions/constants'

const categoryReducer = (state = [], action) => {
    switch(action.type){
        case SET_CATEGORY: 
            return [...action.payload]
        case ADD_CATEGORY:
            return [...state, action.payload]
        case EDIT_CATEGORY: 
            return []
            //  state.map((category) =>{
            //     (category._id === action.payload.id) ? action.payload.category : category;
            // })
        default: return state;
    }
}
export default categoryReducer;
