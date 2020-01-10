import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'reactstrap';

import { logout } from './../store/actions/user';

import Header from './Header';
import Menu from './Menu';
import Category from './Category';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <h1>Welcome</h1>
                    </Row>
                    <Menu/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


