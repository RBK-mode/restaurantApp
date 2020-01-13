import React, {Component} from 'react'
import {Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import '../index.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class MenuItem extends Component {
    state = {
        value: false,
        quantity: 1
    }

    onHandleCheck = () => {
        let value = !this.state.value;
        this.setState(() => ({value}));
        this.props.addToOrder({...this.props.item, quantity: this.state.quantity}, value);
    }

    onQuantityChangeHandler = (e) => {
        let quantity = e.target.value;
        if(!this.state.value){
            this.setState(() => ({quantity}));
        } else {
            this.setState(() => ({quantity}));
            this.props.updateQuantity(this.props.item._id, quantity);
        }
    }

    render(){
        let item = this.props.item;
        return (
            <Card className = 'menu-item'>
                <div className="menu-img-container">
                  <img className = 'menu-img' src= {item.img}/>
                </div>
                <CardBody>
                    <CardTitle>
                        {item.name}
                        <input value = {this.state.value} onChange = {this.onHandleCheck} type='checkbox' />
                     </CardTitle>
                     <CardSubtitle>{item.price} $</CardSubtitle>
                    <input type="number" name="quantity" onChange = {this.onQuantityChangeHandler} value = {this.state.quantity} min="1" max="5" />
                    <CardSubtitle>category: {item.categoryId.name}</CardSubtitle>
                
                
                </CardBody>
              </Card>
        )
    }
}

export default MenuItem;
