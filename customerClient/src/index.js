import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { me } from './store/actions/user';

import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { requestOrder } from './store/actions/request';

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <AppRouter/>
      </Provider>
    )
  }
}

let token = localStorage.getItem('token');
if(token){
    store.dispatch(me(token));
}

let initRequestOrder = localStorage.getItem('new-order');

if(initRequestOrder){
  store.dispatch(requestOrder(JSON.parse(initRequestOrder)));
}


ReactDOM.render(<App />, document.getElementById('root'));
