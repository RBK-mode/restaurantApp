import { SET_CATEGORY } from './constants';

export const setCategoryActionCreator = (payload) => ({
    type: SET_CATEGORY,
    payload
});

export const setCategory = () => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status === 200){
            let result = await response.json();
            dispatch(setCategoryActionCreator(result));
        }
    } catch(err) {
        console.log(err);
    }
}