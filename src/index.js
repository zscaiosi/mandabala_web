import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';


const store = createStore(wholeState, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

