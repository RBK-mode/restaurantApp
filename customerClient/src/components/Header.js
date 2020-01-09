import React, {Component} from 'react';
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
    NavbarText,
  } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from './../store/actions/user';
import { Link } from 'react-router-dom';
import Category from './Category';

class Header extends Component{
    state = {
        isOpen: false,
        isCategoryOpen: false
    }

    toggleCategory = () => this.setState((prev) => ({isCategoryOpen: !prev.isCategoryOpen}));

    toggle = () => this.setState({isOpen: true});

    render(){
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              <Link to="/">Home</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                    <Link to="/Orders">Orders History</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                  <NavbarText onClick = {this.toggleCategory}> Categories </NavbarText>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {this.props.user.name}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick = {() => { this.props.logout()}}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>4 Glasses</NavbarText>
          </Collapse>
        </Navbar>
        <Category isOpen = {this.state.isCategoryOpen} />
      </div>
    );
    }
}
  
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);