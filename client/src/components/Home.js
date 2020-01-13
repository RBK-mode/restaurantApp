import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenu } from '../store/actions/menu';
import { setItem } from '../store/actions/item';
import { setCategory } from '../store/actions/cateogry';
import { setCustomer } from '../store/actions/customer';
import { setOrder } from '../store/actions/order';
import moment from 'moment';
import { Card, CardText, Container, Col, Row } from 'reactstrap';

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
        var dataOrder = await responseOrder.json();
        dataOrder = dataOrder.map(order => {
            var total = 0;
            order.items_list.map(item => {
                total += item.price;
            })
            order.total = total;
            order.createdAt = moment(new Date(order.createdAt)).format('DD-MM-YYYY HH:mm');
            return order;
        });
        this.props.setOrder(dataOrder);
    }

    render() {
        const approved = this.props.orders.filter(order => order.state === 'approved').length;
        const rejected = this.props.orders.filter(order => order.state === 'rejected').length;

        return (
            <Container >
                <br /><br />
                <Row>
                    <Col>
                        <Card body inverse color="info">
                            <CardText><h5>{this.props.customers.length} Customers</h5></CardText>
                        </Card>
                    </Col>
                    <br /><br />
                    <Col>
                        <Card body inverse color="warning">
                            <CardText><h5>{this.props.orders.length} Orders</h5></CardText>
                        </Card>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col>
                        <Card body inverse color="success">
                            <CardText><h5>{approved} Approved Orders</h5></CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body inverse color="danger">
                            <CardText><h5>{rejected} Rejected Orders</h5></CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers,
    orders: state.orders
})

const mapDispatchToProps = (dispatch) => ({
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


