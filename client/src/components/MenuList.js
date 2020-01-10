import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenu, addMenuItem, deleteMenuItem } from '../store/actions/menu';
import ItemItem from './ItemItem';


export class MenuList extends Component {
    state = {

    }
    async componentDidMount() {
        const response = await fetch("http://localhost:8000/api/menu", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
        });
        const data = await response.json();
        this.props.setMenu(data);
        console.log(data)
    };

    render() {
        console.log(this.props.menu)
        return (
            <div>
                {
                    this.props.menu.map(item => <ItemItem key={item._id} item={item.itemId} />)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menu: state.menu.map(item => {
        console.log(item)
        item.itemId.categoryId = state.cateogries.filter(cat => cat._id === item.itemId.categoryId)[0];
        return item;
    })
})

const mapDispatchToProps = (dispatch) => {
    return {
        setMenu: (data) => dispatch(setMenu(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);