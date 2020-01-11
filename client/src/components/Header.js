import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/Home">Home</Link>
                <Link to='/Category'>Categories</Link>
                <Link to='/Item'>Items</Link>
                <Link to='/Menu'>Menu</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
