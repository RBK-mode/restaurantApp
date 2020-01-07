import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import AdminPrivateRoute from './AdminPrivateRoute';
import CustomerPrivateRoute from './CustomerPrivateRoute';
import PublicRoute from './PublicRoute';

import AdminHome from './../components/ControlPanel/Home';
import CustomerHome from './../components/Customer/Home';

import Login from './../components/Login';
import Signup from './../components/Signup';

const AppRouter = () => {
    return (
    <Router>
        <div>
          <Switch>
            <PublicRoute path = '/' component = {Login} exact/>
            <PublicRoute path = '/signup' component = {Signup} exact/>
            <AdminPrivateRoute path = '/admin' component = {AdminHome}/>
            <CustomerPrivateRoute path = '/me' component = {CustomerHome}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
