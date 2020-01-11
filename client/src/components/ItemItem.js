import React from 'react';
import {connect} from 'react-redux';
import { addMenuItemDispatcher, deleteMenuItemDispatcher } from './../store/actions/menu';
 function ItemItem(props) {
  return (
    <div>
    <div onClick={() => props.onSelectedItem(props.item)}>
      <h2>{props.item.name}</h2>
      <img src={props.item.img} style={{height: '100px',width:'100px'}}/>
      <h3>Price: ${props.item.price}</h3>
      { props.item.categoryId && <h3>Category: {props.item.categoryId.name}</h3>}
    </div>
    {
      !props.exists &&  <button onClick={() => props.addToMenu(props.item)}> Add To Menu </button>
    }
    {
      props.exists &&  <button onClick={() => props.removeFromMenu(props.item._id)}> Remove From Menu </button>
    }
    </div>
  )
}
function mapStateToProps(state,props){
    return{
      exists: state.menu.filter((menuItem)=>{
        return menuItem.itemId._id === props.item._id
      })[0]
    }
}

function mapDispatchToProps(dispatch){
  return {
    addToMenu: (param) => dispatch(addMenuItemDispatcher(param)),
    removeFromMenu: (param) => dispatch(deleteMenuItemDispatcher(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemItem) 
