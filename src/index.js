import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(wholeState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

