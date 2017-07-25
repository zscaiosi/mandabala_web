import axios from 'axios';
import {api} from '../config.json'

export const POST_LOGIN_CLIENTE = 'POST_LOGIN_CLIENTE';
export const POST_LOGIN_CLIENTE_SUCCESS = 'POST_LOGIN_CLIENTE_SUCCESS';
export const POST_LOGIN_CLIENTE_ERROR = 'POST_LOGIN_CLIENTE_ERROR';

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