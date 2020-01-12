import { REQUEST_ORDER } from './constants';

export const requestOrderActionCreator = (payload) => ({
    type: REQUEST_ORDER,
    payload
})

export const requestOrder = (order) => async dispatch => {
    try {
        let response = await fetch('http://localhost:8000/api/order', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            }
        });
        if(response.status === 201){
            let result = await response.json();
            dispatch(requestOrderActionCreator(result));
        }
    } catch(err) {

    }
}