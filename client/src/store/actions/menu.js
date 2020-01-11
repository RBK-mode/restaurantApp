import { SET_MENU, ADD_MENU_ITEM, DELETE_MENU_ITEM } from './constants';

export const setMenu = (data) => {
    return {
        type: SET_MENU,
        payload: data
    }
};

export const addMenuItem = (data) => {
    return {
        type: ADD_MENU_ITEM,
        payload: data
    }
};


export const addMenuItemDispatcher = (param) => async dispatch => {
    try {
        const response = await fetch("http://localhost:8000/api/menu", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth': localStorage.getItem('token')
          },
          body: JSON.stringify({ itemId: param._id })
        });
        const data = await response.json();
        dispatch(addMenuItem(data[0]))
      } catch (err) {
        console.log(err);
      }
};



export const deleteMenuItemDispatcher = (param) =>{

    return async function(dispatch){
        try{
            const response = await fetch("http://localhost:8000/api/menu/delete/"+param,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
              }
            });

            if(response.status === 200){
                dispatch(deleteMenuItem(param));
            }
          }
          catch(error){
              console.log(error)
          }
    }
}

export const deleteMenuItem = (payload) => {
    return {
        type: DELETE_MENU_ITEM,
        payload
    }
};