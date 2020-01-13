import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Category from '../components/CategoryList';
import Item from '../components/ItemList';
import Menu from '../components/MenuList';
import Customer from '../components/CustomerList';
import Order from '../components/OrderList';
import CustomerOrder from '../components/CustomerOrder';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from './../components/Home';

import Login from './../components/Login';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/admin/' component={Login} exact />
          <PrivateRoute path='/admin/Home' component={Home} />
          <PrivateRoute path='/admin/category' component={Category} />
          <PrivateRoute path='/admin/item' component={Item} />
          <PrivateRoute path='/admin/menu' component={Menu} />
          <PrivateRoute path='/admin/customer' component={Customer} />
          <PrivateRoute path='/admin/order' component={Order} exact />
          <PrivateRoute path='/admin/order/:id' component={CustomerOrder} />

          <Route>
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default AppRouter;
