import {
  POST_LOGIN_CLIENTE,
  POST_LOGIN_CLIENTE_SUCCESS,
  POST_LOGIN_CLIENTE_ERROR
} from "../actions/clienteActions";

const CLIENTE_STATE = {
  isPostingLoginCliente: false,
  postLoginClienteSuccess: null,
  postLoginClienteError: null
}

export const cliente = (state = CLIENTE_STATE, action) => {
  switch(action.type){
    case POST_LOGIN_CLIENTE:
      return{
        ...state,
        isPostingLoginCliente: true,
        postLoginClienteSuccess: null,
        postLoginClienteError: null
      }
    case POST_LOGIN_CLIENTE_SUCCESS:
      return{
        ...state,
        isPostingLoginCliente: false,
        postLoginClienteSuccess: action.response,
        postLoginClienteError: null        
      }
    case POST_LOGIN_CLIENTE_ERROR:
      return{
        ...state,
        isPostingLoginCliente: false,
        postLoginClienteSuccess: null,
        postLoginClienteError: action.error
      }
    default:
      return{
        ...state
      }
  }
}