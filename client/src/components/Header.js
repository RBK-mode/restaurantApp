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
    NavbarText,
    UncontrolledDropdown,
    Badge, DropdownToggle, DropdownMenu, DropdownItem 
} from 'reactstrap';
import Order from './OrderModal';

export class Header extends Component {
    state = {
        isOpen: false,
        isCategoryOpen: false,
        dropdownOpen: false,
        modal: false,
        request: {}
    }

    toggleModal = () => this.setState((prevState) => ({modal: !prevState.modal}));

    toggleCategory = () => this.setState((prev) => ({ isCategoryOpen: !prev.isCategoryOpen }));

    toggle = () => this.setState({ isOpen: true });
    toggleRDD = () => this.setState((prevState) => ({dropdownOpen: prevState.dropdownOpen}))
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <img src={require('./../logoT.png')} style={{ height: '100px', width: '100px' }} />
                    </NavbarBrand>
                    <NavbarBrand>
                        <Link to="/admin/Home">Home</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar >
                            <NavItem>
                                <NavLink>
                                    <Link to='/admin/Category'>Categories</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/admin/Item'>Items</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/admin/Menu'>Menu</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/admin/Customer'>Customers</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/admin/Order'>Orders</Link>
                                </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                {
                                    this.props.requests.length > 0 && 
                                    <DropdownToggle caret>
                                        requests
                                        <Badge color="danger" pill>{this.props.requests.length}</Badge>
                                    </DropdownToggle>
                                }

                                <DropdownMenu right>
                                    {
                                        this.props.requests.map((request) => (
                                            <div>
                                            <DropdownItem  onClick = {() => {
                                                this.toggleModal()
                                                this.setState(() => ({
                                                    request
                                                }))
                                            }} nav>
                                                {request._id}
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            </div>
                                        ))
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavbarText>4 Glasses</NavbarText>
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
                {
                    this.state.modal && <Order modal = {this.state.modal} toggle = {this.toggleModal} request = {this.state.request}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    requests: state.requests,
    admin: state.admin
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
