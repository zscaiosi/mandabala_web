import {
  POST_LOGIN_CLIENTE,
  POST_LOGIN_CLIENTE_SUCCESS,
  POST_LOGIN_CLIENTE_ERROR,
  GET_CLIENTE,
  GET_CLIENTE_SUCCESS,
  GET_CLIENTE_ERROR,
  POST_CADASTRO,
  POST_CADASTRO_SUCCESS,
  POST_CADASTRO_ERROR,
  GET_OPERADORES,
  GET_OPERADORES_SUCCESS,
  GET_OPERADORES_ERROR,
  POST_LOGIN_OPERADOR,
  POST_LOGIN_OPERADOR_SUCCESS,
  POST_LOGIN_OPERADOR_ERROR
} from "../actions/clienteActions";

const CLIENTE_STATE = {
  isPostingLoginCliente: false,
  postLoginClienteSuccess: null,
  postLoginClienteError: null,
  isGettingCliente: false,
  getClienteSuccess: null,
  getClienteError: null,
  isPostingCadastro: false,
  postCadastroSuccess: null,
  postCadastroError: null,
  isGettingOperadores: false,
  getOperadoresSuccess: null,
  getOperadoresError: null,
  isPostingLoginOperador: false,
  postLoginOperadorSuccess: null,
  postLoginOperadorError: null
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
    case POST_CADASTRO:
      return {
        ...state,
        isPostingCadastro: true,
        postCadastroSuccess: null,
        postCadastroError: null
      }
      case POST_CADASTRO_SUCCESS:
        return {
          ...state,
          isPostingCadastro: false,
          postCadastroSuccess: action.response,
          postCadastroError: null
        }
      case POST_CADASTRO_ERROR:
        return {
          ...state,
          isPostingCadastro: false,
          postCadastroSuccess: action.error,
          postCadastroError: null
        }
      case GET_OPERADORES:
        return{
          ...state,
          isGettingOperadores: true,
          getOperadoresSuccess: null,
          getOperadoresError: null
        }
      case GET_OPERADORES_SUCCESS:
        return{
          ...state,
          isGettingOperadores: false,
          getOperadoresSuccess: action.response,
          getOperadoresError: null
        }
      case GET_OPERADORES_ERROR:
        return{
          ...state,
          isGettingOperadores: false,
          getOperadoresSuccess: null,
          getOperadoresError: action.error
        }
      case POST_LOGIN_OPERADOR:
        return {
          ...state,
          isPostingLoginOperador: true,
          postLoginOperadorSuccess: null,
          postLoginOperadorError: null          
        }
      case POST_LOGIN_OPERADOR_SUCCESS:
        return {
          ...state,
          isPostingLoginOperador: false,
          postLoginOperadorSuccess: action.response,
          postLoginOperadorError: null          
        }
      case POST_LOGIN_OPERADOR_ERROR:
        return {
          ...state,
          isPostingLoginOperador: false,
          postLoginOperadorSuccess: null,
          postLoginOperadorError: action.error         
        }
    default:
      return{
        ...state
      }
  }
}