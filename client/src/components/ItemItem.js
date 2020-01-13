import React from 'react';
import { connect } from 'react-redux';
import { addMenuItemDispatcher, deleteMenuItemDispatcher } from './../store/actions/menu';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../index.css';

function ItemItem(props) {
  return (
    <div>
      <Col className='category-container'>
        <div onClick={() => props.onSelectedItem(props.item)}>

          <h4>{props.item.name}</h4>

          <div className="dropdown">

            <img src={props.item.img} style={{ height: '150px', width: '150px' }} />


            <div className="dropdown-content">
              <img src={props.item.img} style={{ height: '300px', width: '300px' }} />
              <div className="desc">
                <h5>Price: ${props.item.price}</h5>
                {props.item.categoryId && <h5>Category: {props.item.categoryId.name}</h5>}
              </div>
            </div>
          </div>

        </div>
        {
          !props.exists && <Button onClick={() => props.addToMenu(props.item)}> Add To Menu </Button>
        }
        {
          props.exists && <Button style={{ marginTop: '10px', backgroundColor: '#FE4042' }} onClick={() => props.removeFromMenu(props.item._id)}> Remove From Menu </Button>
        }
      </Col>
    </div>
  )
}
function mapStateToProps(state, props) {
  return {
    exists: state.menu.filter((menuItem) => {
      return menuItem.itemId._id === props.item._id
    })[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToMenu: (param) => dispatch(addMenuItemDispatcher(param)),
    removeFromMenu: (param) => dispatch(deleteMenuItemDispatcher(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemItem) 
