import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenu, addMenuItem, deleteMenuItemDispatcher } from '../store/actions/menu';
import ItemItem from './ItemItem';
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export class MenuList extends Component {
    state = {

    }
    
    render() {
        return (
            <div>
                <Row>
                {
                    this.props.menu.map(item => <ItemItem  key={item._id} item={item.itemId} />)
                }
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menu: state.menu.map(item => {
        item.itemId.categoryId = state.cateogries.filter(cat => cat._id === item.itemId.categoryId)[0];
        return item;
    })
})

function mapDispatchToProps(dispatch){
 return {
     deleteMenuItem: (param) => dispatch(deleteMenuItemDispatcher(param))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);