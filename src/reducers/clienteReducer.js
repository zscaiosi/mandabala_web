import {
  POST_LOGIN_CLIENTE,
  POST_LOGIN_CLIENTE_SUCCESS,
  POST_LOGIN_CLIENTE_ERROR,
  GET_CLIENTE,
  GET_CLIENTE_SUCCESS,
  GET_CLIENTE_ERROR
} from "../actions/clienteActions";

const CLIENTE_STATE = {
  isPostingLoginCliente: false,
  postLoginClienteSuccess: null,
  postLoginClienteError: null,
  isGettingCliente: false,
  getClienteSuccess: null,
  getClienteError: null
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
    case GET_CLIENTE:
      return{
        ...state,
        isGettingCliente: true,
        getClienteSuccess: null,
        getClienteError: null
      }
    case GET_CLIENTE_SUCCESS:
      return{
        ...state,
        isGettingCliente: false,
        getClienteSuccess: action.response,
        getClienteError: null
      }
    case GET_CLIENTE_ERROR:
      return{
        ...state,
        isGettingCliente: false,
        getClienteSuccess: null,
        getClienteError: action.error
      }
    default:
      return{
        ...state
      }
  }
}