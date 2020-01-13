
import {LOGIN, LOGOUT} from './constants';

export const loginActionCreator = (admin) => ({
    type: LOGIN,
    payload: admin
});

export const login = (user) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/admin/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status === 200){
            let result = await response.json();
            localStorage.setItem('token', result.token);
            dispatch(loginActionCreator(result.admin));
        }
    } catch(err) {
        console.log(err);
    }
}

export const me = (token) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/admin/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        if(response.status === 200){
            let result = await response.json();
            dispatch(loginActionCreator(result));
        }
    } catch(err) {
        console.log(err);
    }
};

export const logoutActionCreator = () => ({
    type: LOGOUT
});

export const logout = (token) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/admin/me/logout', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        if(response.status === 200){
            dispatch(logoutActionCreator());
            localStorage.removeItem('token');
        }
    } catch(err) {
        console.log(err)
    }
    dispatch(logoutActionCreator());
    localStorage.removeItem('token');
}