import {combineReducers} from 'redux';
import {cliente} from './clienteReducer';
import {admin} from './adminReducer';

const wholeState = combineReducers({
  //Each state/reducer
  cliente,
  admin
});

export default wholeState;