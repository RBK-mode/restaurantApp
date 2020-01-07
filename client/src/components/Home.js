import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from './../store/actions/admin';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>admin</h1>
                <button onClick = {() => { this.props.logout()}} >Logout</button>
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


