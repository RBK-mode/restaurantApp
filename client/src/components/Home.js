import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from './../store/actions/admin';
import { setMenu } from '../store/actions/menu';
import { setItem } from '../store/actions/item';
import { setCategory } from '../store/actions/cateogry';


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
    };
    render() {
        return (
            <div>
                <h1>admin</h1>
                <button onClick = {() => { this.props.logout()}} >Logout</button>
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
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


