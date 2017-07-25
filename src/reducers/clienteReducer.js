import {
  POST_CLIENTE,
  POST_CLIENTE_SUCCESS,
  POST_CLIENTE_ERROR
} from "../actions/clienteActions";

const CLIENTE_STATE = {
  isPostingCliente: false,
  postClienteSuccess: null,
  postClienteError: null
}

export const cliente = (state = CLIENTE_STATE, action) => {
  switch(action.type){
    case POST_CLIENTE:
      return{
        ...state,
        isPostingCliente: true,
        postClienteSuccess: null,
        postClienteError: null
      }
    case POST_CLIENTE_SUCCESS:
      return{
        ...state,
        isPostingCliente: false,
        postClienteSuccess: action.response,
        postClienteError: null        
      }
    case POST_CLIENTE_ERROR:
      return{
        ...state,
        isPostingCliente: false,
        postClienteSuccess: null,
        postClienteError: action.response
      }
    default:
      return{
        ...state
      }
  }
}