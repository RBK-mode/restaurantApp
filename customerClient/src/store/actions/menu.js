import { SET_MENU } from './constants';

export const setMenuActionCreator = (payload) => ({
    type: SET_MENU,
    payload
});

export const setMenu = () => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/menu', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status === 200){
            let result = await response.json();
            dispatch(setMenuActionCreator(result));
        }
    } catch(err) {
        console.log(err);
    }
}