    import { NEW_REQUEST, APPROVE_REQUEST, REJECT_REQUEST } from './constants';
    import { addOrder } from './order';
    import { socket } from './../../components/Home';

    export const newRequest = payload => ({
        type: NEW_REQUEST,
        payload
    });


    export const approveRequest = payload => ({
        type: APPROVE_REQUEST,
        payload
    });

    export const approveRequestDispatcher = (id, order) => async dispatch => {
        try{
            let response = await fetch('http://localhost:8000/api/order/approve/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth': localStorage.getItem('token')
                }
            });
            if(response.status === 200){
                let result = await response.json();
                dispatch(approveRequest(id));
                dispatch(addOrder({...order, state: 'approved'}));
                socket.emit('approved', {...order, state: 'approved'});
            }
        } catch(err) {
            console.log(err);
            return Promise.reject(err)
        }
    }

    export const rejectRequest = (payload) => ({
        type: REJECT_REQUEST,
        payload
    })

    export const rejectRequestDispatcher = (id, order) => async dispatch => {
        try{
            let response = await fetch('http://localhost:8000/api/order/reject/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth': localStorage.getItem('token')
                }
            });
            if(response.status === 200){
                let result = await response.json();
                dispatch(rejectRequest(id));
                dispatch(addOrder({...order, state: 'rejected'}));
                socket.emit('rejected', {...order, state: 'rejected'});
            }
        } catch(err) {
            console.log(err);
            return Promise.reject(err)
        }
    }