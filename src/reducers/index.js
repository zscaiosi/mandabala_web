import {combineReducers} from 'redux';
import {cliente} from './clienteReducer';
import {admin} from './adminReducer';
import {maquina} from './maquinaReducer';

const wholeState = combineReducers({
  //Each state/reducer
  cliente,
  admin,
  maquina
});

export default wholeState;