import {
  GET_MAQUINAS,
  GET_MAQUINAS_SUCCESS,
  GET_MAQUINAS_ERROR,
  POST_CADASTRAR_MAQUINA,
  POST_CADASTRAR_MAQUINA_SUCCESS,
  POST_CADASTRAR_MAQUINA_ERROR
} from '../actions/maquinaActions';

const MAQUINA_STATE = {
  isGettingMaquinas: false,
  getMaquinasSuccess: null,
  getMaquinasError: null,
  isPostingMaquina: false,
  postMaquinaSuccess: null,
  postMaquinaError: null
}

export const maquina = (state = MAQUINA_STATE, action) => {
  switch (action.type) {
    case GET_MAQUINAS:
      return {
        ...state,
        isGettingMaquinas: true,
        getMaquinasSuccess: null,
        getMaquinasError: null
      }
    case GET_MAQUINAS_SUCCESS:
      return {
        ...state,
        isGettingMaquinas: false,
        getMaquinasSuccess: action.response,
        getMaquinasError: null
      }      
    case GET_MAQUINAS_ERROR:
      return {
        ...state,
        isGettingMaquinas: false,
        getMaquinasSuccess: null,
        getMaquinasError: action.error
      }
    case POST_CADASTRAR_MAQUINA:
      return {
        ...state,
        isPostingMaquina: true,
        postMaquinaSuccess: null,
        postMaquinaError: null        
      }     
      case POST_CADASTRAR_MAQUINA_SUCCESS:
      return {
        ...state,
        isPostingMaquina: false,
        postMaquinaSuccess: action.response,
        postMaquinaError: null        
      }        
      case POST_CADASTRAR_MAQUINA_ERROR:
      return {
        ...state,
        isPostingMaquina: false,
        postMaquinaSuccess: null,
        postMaquinaError: action.error        
      }                    
    default:
      return {
        ...state
      }
  }
}