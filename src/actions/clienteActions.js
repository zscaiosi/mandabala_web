import axios from 'axios';
import {api} from '../config.json'

export const POST_LOGIN_CLIENTE = 'POST_LOGIN_CLIENTE';
export const POST_LOGIN_CLIENTE_SUCCESS = 'POST_LOGIN_CLIENTE_SUCCESS';
export const POST_LOGIN_CLIENTE_ERROR = 'POST_LOGIN_CLIENTE_ERROR';

export const GET_CLIENTE = 'GET_CLIENTE';
export const GET_CLIENTE_SUCCESS = 'GET_CLIENTE_SUCCESS';
export const GET_CLIENTE_ERROR = 'GET_CLIENTE_ERROR';

const postLoginCliente = () => {
  return {
    type: POST_LOGIN_CLIENTE
  }
}

const postLoginClienteSuccess = (response) => {
  return {
    type: POST_LOGIN_CLIENTE_SUCCESS,
    response
  }
}

const postLoginClienteError = (error) => {
  return {
    type: POST_LOGIN_CLIENTE_ERROR,
    error
  }
}

export const postLoginClienteRequest = (payload) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const request = instance.post(`${api.url}${api.port}/clientes/login`);

  return dispatch => {
    dispatch(postLoginCliente());

    return request.then( response => {
      console.log('POST LOGIN CLIENTE SUCCESS');
      dispatch(postLoginClienteSuccess(response));
    }).catch( error => {
      console.log('post login cliente error');
      dispatch(postLoginClienteError(error));
    });
  }
}

const getCliente = () => {
  return {
    type: GET_CLIENTE
  }
}

const getClienteSuccess = (response) => {
  return {
    type: GET_CLIENTE_SUCCESS,
    response
  }
}

const getClienteError = (error) => {
  return {
    type: GET_CLIENTE_ERROR,
    error
  }
}

export const getClienteRequest = (id=null) => {
  const instance = axios.create({
    headers: {
      "Content-Type":"application/json"
    }
  });

  let request = null;

  if( id !== null ){
    request = instance.get(`${api.url}${api.port}/clientes/encontrar?id=${id}`);
  }else{
    request = instance.get(`${api.url}${api.port}/clientes/listar`);
  }


  return dispatch => {
    dispatch(getCliente());

    return request.then( (response) => {
      dispatch(getClienteSuccess(response));
    }).catch( (error) => {
      dispatch(getClienteError(error));
    });
  }

}