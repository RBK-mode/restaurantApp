import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Category from '../components/CategoryList';
import Item from '../components/ItemList';
import Menu from '../components/MenuList';
import Customer from '../components/CustomerList';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from './../components/Home';

import Login from './../components/Login';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/' component={Login} exact />
          <PrivateRoute path='/Home' component={Home} />
          <PrivateRoute path='/category' component={Category} />
          <PrivateRoute path='/item' component={Item} />
          <PrivateRoute path='/menu' component={Menu} />
          <PrivateRoute path='/customer' component={Customer} />

          <Route>
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default AppRouter;
