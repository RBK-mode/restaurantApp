import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Row, Button } from 'reactstrap';

import MenuItem from './MenuItem';
import { requestOrderActionCreator } from './../store/actions/request';

const menuData = [
    {
        _id: 'frisfvcfdces879789',
        name: 'fries',
        img: 'https://images.unsplash.com/photo-1549128247-37e905ebdb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        price: 8,
        deleted: false,
        categoryId: 'sfclehfie'
    },
    {
        _id: 'vfvrtb6758786',
        name: 'rice',
        img: 'https://image.shutterstock.com/image-photo/grilled-sandwich-cheese-vegetables-green-260nw-779730214.jpg',
        price: 4,
        deleted: false,
        categoryId: 'csdfsdffs'
    },
    {
        _id: 'sdfvdhhhh2342',
        name: 'choclate',
        img: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1043451_11.jpg?itok=Z_w2WOYB',
        price: 8,
        deleted: false,
        categoryId: 'sfclehfie'
    },
    {
        _id: 'sdfsfefggewedw',
        name: 'juice',
        img: 'https://image.shutterstock.com/image-photo/supreme-pizza-lifted-slice-1-260nw-84904912.jpg',
        deleted: false,
        price: 8,
        categoryId: 'sfclehfie'
    },
]
export class Menu extends Component {
    state = {
        location: {
            latitude: null,
            longitude: null
        },
        itemsList: []
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
        //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        let geoError = (error) => {
          console.log('Error occurred. Error code: ' + error);
          if(error.code === 1){
              alert('please let the system get access to your location');
          }
          // error.code can be:
          //   0: unknown error
          //   1: permission denied
          //   2: position unavailable (error response from location provider)
          //   3: timed out
        };
      
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    }

    onRequestOrder = () => {
        this.getUserLocation();
        // this.props.requestOrder()
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menu: state.menu.map(item => {
        item.itemId.categoryId = state.category.filter(cat => cat._id === item.itemId.categoryId)[0] || '';
        return item;
    })
})

const mapDispatchToProps = (dispatch) => ({
    requestOrder: (order) => dispatch(requestOrderActionCreator(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
