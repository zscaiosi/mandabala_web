import axios from 'axios';
import {api} from '../config.json';

export const GET_MAQUINAS = "GET_MAQUINAS";
export const GET_MAQUINAS_SUCCESS = "GET_MAQUINAS_SUCCESS";
export const GET_MAQUINAS_ERROR = "GET_MAQUINAS_ERROR";

export const POST_CADASTRAR_MAQUINA = "POST_CADASTRAR_MAQUINA";
export const POST_CADASTRAR_MAQUINA_SUCCESS = "POST_CADASTRAR_MAQUINA_SUCCESS";
export const POST_CADASTRAR_MAQUINA_ERROR = "POST_CADASTRAR_MAQUINA_ERROR";

const getMaquinas = () => {
  return {
    type: GET_MAQUINAS
  }
}

const getMaquinasSuccess = (response) => {
  return {
    type: GET_MAQUINAS_SUCCESS,
    response
  }
}

const getMaquinasError = (error) => {
  return {
    type: GET_MAQUINAS_ERROR,
    error
  }
}

export const getMaquinasRequest = (clienteId) => {
  let request = null;

  if( clienteId ){
    request = axios.get(`${api.url}/maquinas/listar/minhas?cliente=${clienteId}`);
  }else{
    request = axios.get(`${api.url}/maquinas/listar`);
  }

  return (dispatch) => {
    dispatch(getMaquinas());

    return request.then( (response) => {
      console.log("GET MAQUINAS SUCCESS", response);
      dispatch(getMaquinasSuccess(response.data));
    }).catch( (error) => {
      console.log("GET MAQUINAS ERROR", error);
      dispatch(getMaquinasError(error));
    });

  }

}

const postCadastrarMaquina = () => {
  return {
    type: POST_CADASTRAR_MAQUINA
  }
}

const postCadastrarMaquinaSuccess = (response) => {
  return {
    type: POST_CADASTRAR_MAQUINA_SUCCESS,
    response
  }
}

const postCadastrarMaquinaError = (error) => {
  return {
    type: POST_CADASTRAR_MAQUINA_ERROR,
    error
  }
}

export const postCadastrarMaquinaRequest = (payload) => {
  const request = axios.post(`${api.url}/maquinas/cadastrar`, payload);

  return (dispatch) => {
    dispatch(postCadastrarMaquina());

    return request.then( (response) => {
      console.log("POST MAQUINAS SUCCESS", response);
      dispatch(postCadastrarMaquinaSuccess(response.data));
    }).catch( (error) => {
      console.log("POST MAQUINAS ERROR", error);
      dispatch(postCadastrarMaquinaError(error));
    });

  }  
}