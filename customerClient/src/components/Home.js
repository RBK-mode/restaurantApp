import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { setMenu } from './../store/actions/menu';
import { setCategory } from './../store/actions/category';

import { logout } from './../store/actions/user';

import Header from './Header';
import Menu from './Menu';
import Order from './Order';

class Home extends Component {

    state = {
        modal: false
    }

    toggle = () => this.setState((prevState) => ({modal: !prevState.modal}));

    componentDidMount(){
        this.props.setCategory();
        this.props.setMenu();
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <h1>Welcome</h1>
                    </Row>
                    <Menu />
                    {
                        this.props.request._id && <Button color="danger" onClick={this.toggle}>track order</Button>
                    }
                    {
                        this.props.request._id && <Order modal = {this.state.modal} toggle = {this.toggle}/>
                    }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    request: state.request
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setCategory: () => dispatch(setCategory()),
    setMenu: () => dispatch(setMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


