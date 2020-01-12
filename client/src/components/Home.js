import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from './../store/actions/admin';
import { setMenu } from '../store/actions/menu';
import { setItem } from '../store/actions/item';
import { setCategory } from '../store/actions/cateogry';
import { setCustomer } from '../store/actions/customer';
import { setOrder } from '../store/actions/order';

class Home extends Component {
    async componentDidMount() {
        const responseMenu = await fetch("http://localhost:8000/api/menu", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
        });
        const dataMenu = await responseMenu.json();
        this.props.setMenu(dataMenu);

        const responseCategory = await fetch("http://localhost:8000/api/category", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
        });
        const dataCateogry = await responseCategory.json();
        this.props.setCategory(dataCateogry);

        const responseItem = await fetch("http://localhost:8000/api/item", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
        });
        const dataItem = await responseItem.json();
        this.props.setItem(dataItem);

        const responseCustomer = await fetch("http://localhost:8000/api/user", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
        });
        const dataCustomer = await responseCustomer.json();
        this.props.setCustomer(dataCustomer);

        const responseOrder = await fetch("http://localhost:8000/api/order", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            }
        });
        const dataOrder = await responseOrder.json();
        this.props.setOrder(dataOrder);
    }

    render() {
        return (
            <div>
                <h1>admin</h1>
                <button onClick={() => { this.props.logout() }} >Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setMenu: (data) => dispatch(setMenu(data)),
    setCategory: (data) => {
        dispatch(setCategory(data));
    },
    setItem: (data) => {
        dispatch(setItem(data));
    },
    setCustomer: (data) => {
        dispatch(setCustomer(data));
    },
    setOrder: (data) => {
        dispatch(setOrder(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


