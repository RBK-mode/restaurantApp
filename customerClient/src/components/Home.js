import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row } from 'reactstrap';

import { logout } from './../store/actions/user';
import { setMenu } from './../store/actions/menu';
import { setCategory } from './../store/actions/category';

import Header from './Header';
import Menu from './Menu';


class Home extends Component {
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
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setMenu: () => dispatch(setMenu()),
    setCategory: () => dispatch(setCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


