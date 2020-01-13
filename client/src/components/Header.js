import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from './../store/actions/admin';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

export class Header extends Component {
    state = {
        isOpen: false,
        isCategoryOpen: false
    }

    toggleCategory = () => this.setState((prev) => ({ isCategoryOpen: !prev.isCategoryOpen }));

    toggle = () => this.setState({ isOpen: true });

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <img src={require('./../logoT.png')} style={{ height: '100px', width: '100px' }} />
                    </NavbarBrand>
                    <NavbarBrand>
                        <Link to="/Home">Home</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar >
                            <NavItem>
                                <NavLink>
                                    <Link to='/Category'>Categories</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/Item'>Items</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/Menu'>Menu</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/Customer'>Customers</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/Order'>Orders</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem style={{ cursor: 'pointer' }}>
                                <NavLink onClick={() => { this.props.logout() }}>Logout</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavbarText>
                                    {this.props.admin.name}
                                </NavbarText>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    admin: state.admin
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
