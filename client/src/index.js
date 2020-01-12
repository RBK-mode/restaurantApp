import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { me } from './store/actions/admin';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
