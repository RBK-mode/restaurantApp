import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
export class Header extends Component {
    state = {
        isOpen: false,
        isCategoryOpen: false
    }

    toggleCategory = () => this.setState((prev) => ({isCategoryOpen: !prev.isCategoryOpen}));

    toggle = () => this.setState({isOpen: true});
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand>
                <Link to="/Home">Home</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
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
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
