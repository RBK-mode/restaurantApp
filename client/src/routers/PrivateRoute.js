import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from "../components/Header";

const PrivateRoute = ({ component: Component,  auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth 
        ? (<div>
            <Header/>
            <Component {...props} />
        </div>)
        : <Redirect to='/admin' />
    )} />
  )

const mapStateToProps = (state) => ({
    auth: !!state.admin._id
})

export default connect(mapStateToProps)(PrivateRoute)
