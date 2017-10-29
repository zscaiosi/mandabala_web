import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import wholeState from './reducers/index';
import {Provider} from 'react-redux';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import "./css/main.css";
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(wholeState, applyMiddleware(thunkMiddleware));
const persistedState = loadState();
const store = createStore(wholeState, persistedState, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

store.subscribe( () => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <section id="index-section">
        <Home />
      </section>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

