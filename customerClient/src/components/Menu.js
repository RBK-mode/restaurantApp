import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Row, Button } from 'reactstrap';

import MenuItem from './MenuItem';
import { requestOrder, requestOrderState } from './../store/actions/request';

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export class Menu extends Component {
    state = {
        location: {
            latitude: null,
            longitude: null
        },
        itemsList: [],
        rejected: false
    }

    addToOrder = (item, check) => {
        console.log(check)
        if(check){
            this.setState((prevState) => ({itemsList: [...prevState.itemsList, item]}));
        } else {
            let itemsList = this.state.itemsList.filter((orderItem) => {
                console.log(orderItem)
                console.log(item)
                return orderItem._id !== item._id
            });
            this.setState(() => ({itemsList}));
        }
    }

    updateQuantity = (id, quantity) => {
        console.log(id, quantity)
        this.setState((prevState) => {
            itemsList: return prevState.itemsList.map((item) => {
                if(item._id === id){
                    item.quantity = quantity;
                    console.log(item)
                }
                return item;
            });
        });
    }

    getUserLocation = () => {
        let startPos;
        let geoOptions = {
           timeout: 10 * 2000
        }
      
        let geoSuccess = (position) => {
            startPos = position;
            this.setState(() => ({location: {
                latitude: startPos.coords.latitude,
                longitude: startPos.coords.longitude
            }}));
            return Promise.resolve(this.state.location);
        //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        let geoError = (error) => {
          console.log('Error occurred. Error code: ' + error);
          if(error.code === 1){
              alert('please let the system get access to your location');
          }
          return Promise.reject(error);
          // error.code can be:
          //   0: unknown error
          //   1: permission denied
          //   2: position unavailable (error response from location provider)
          //   3: timed out
        };
      
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    }

    onRequestOrder = async () => {
        try{
            await this.getUserLocation();
            let order = {
                location: this.state.location,
                items_list: this.state.itemsList.map(item => {
                    return {
                        ...item,
                        categoryId: item.categoryId._id
                    }
                }),
                customerId: this.props.user._id
            }
            console.log(order)
            try{
                let req = await this.props.requestOrder(order);
                socket.emit('new-order', this.props.user, this.props.request);
                socket.on(this.props.request._id, (state) => {
                    this.props.requestOrderState(state);
                    if(state === 'rejected'){
                        localStorage.setItem('new-order', JSON.stringify({...order, state}));
                        this.setState(() => ({rejected: true}))
                    } else {
                        localStorage.removeItem('new-order');
                    }
                });
                localStorage.setItem('new-order', JSON.stringify(order));
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            alert(' sorry, we couldnt access your location.')
        }
    }

    render() {
        return (
            <div>
                <div className = 'menu-container'>
                    {
                        this.props.menu.map(item => <MenuItem updateQuantity = {(id, quantity) => this.updateQuantity(id, quantity)} addToOrder = {this.addToOrder} key = {item._id} item = {item.itemId}/>)
                    }
                </div>
                <Row>
                    <Button className = 'center' color="secondary" onClick = {this.onRequestOrder} >order</Button>
                </Row>
                {
                    this.state.rejected && <div> sorry your request has been rejected</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menu: state.menu.map(item => {
        item.itemId.categoryId = state.category.filter(cat => cat._id === item.itemId.categoryId)[0] || '';
        return item;
    }), 
    user: state.user,
    request: state.request
})

const mapDispatchToProps = (dispatch) => ({
    requestOrder: (order) => dispatch(requestOrder(order)),
    requestOrderState: (state) => dispatch(requestOrderState(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
