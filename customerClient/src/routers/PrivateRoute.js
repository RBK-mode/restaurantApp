import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component,  auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth? 
        (
            <div>
                <Component {...props} />
            </div>
        )
        : <Redirect to='/' />
    )} />
  )

const mapStateToProps = (state) => ({
    auth: !!state.user._id
})

export default connect(mapStateToProps)(PrivateRoute)
