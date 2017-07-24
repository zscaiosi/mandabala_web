import {combineReducers} from 'redux';
import {cliente} from './clienteReducer';

const wholeState = combineReducers({
  //Each state/reducer
  cliente
});

export default wholeState;