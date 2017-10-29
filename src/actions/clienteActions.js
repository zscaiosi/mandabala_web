import axios from 'axios';
import {api} from '../config.json'

export const POST_LOGIN_CLIENTE = 'POST_LOGIN_CLIENTE';
export const POST_LOGIN_CLIENTE_SUCCESS = 'POST_LOGIN_CLIENTE_SUCCESS';
export const POST_LOGIN_CLIENTE_ERROR = 'POST_LOGIN_CLIENTE_ERROR';

export const GET_CLIENTE = 'GET_CLIENTE';
export const GET_CLIENTE_SUCCESS = 'GET_CLIENTE_SUCCESS';
export const GET_CLIENTE_ERROR = 'GET_CLIENTE_ERROR';

export const POST_CADASTRO = 'POST_CADASTRO';
export const POST_CADASTRO_SUCCESS = 'POST_CADASTRO_SUCCESS';
export const POST_CADASTRO_ERROR = 'POST_CADASTRO_ERROR';

export const GET_OPERADORES = "GET_OPERADORES";
export const GET_OPERADORES_SUCCESS = "GET_OPERADORES_SUCCESS";
export const GET_OPERADORES_ERROR = "GET_OPERADORES_ERROR";


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

 // const request = instance.post(`${api.url}/clientes/login`, payload);
  const request = instance.post(`${api.localhost}${api.port}/clientes/login`, payload);
  return dispatch => {
    dispatch(postLoginCliente());

    return request.then( response => {
      console.log('POST LOGIN CLIENTE SUCCESS');
      dispatch(postLoginClienteSuccess(response.data));
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
    request = instance.get(`${api.localhost}${api.port}/clientes/encontrar?_id=${id}`);
  }else{
    request = instance.get(`${api.localhost}${api.port}/clientes/listar`);
  }


  return dispatch => {
    dispatch(getCliente());

    return request.then( (response) => {
      console.log("response", response)
      dispatch(getClienteSuccess(response.data));
    }).catch( (error) => {
      console.log("error", error)
      dispatch(getClienteError(error));
    });
  }

}

const postCadastro = () => {
  return {
    type: POST_CADASTRO
  }
}

const postCadastroSuccess = (response) => {
  return {
    type: POST_CADASTRO_SUCCESS,
    response
  }
}

const postCadastroError = (error) => {
  return {
    type: POST_CADASTRO_ERROR,
    error
  }
}

export const postCadastroRequest = (payload) => {
  const instance = axios.create({
    headers: {
      "Content-Type" : "application/json"
    }
  });

  return (dispatch) => {
    dispatch(postCadastro());

    return instance.post(`${api.localhost}${api.port}/clientes/cadastrar`, payload)
      .then( (response) => {
        dispatch(postCadastroSuccess(response));
      })
      .catch( (error) => {
        dispatch(postCadastroError(error));
      });
  }
}

const getOperadores = () => {
  return {
    type: GET_OPERADORES
  }
}

const getOperadoresSuccess = (response) => {
  return {
    type: GET_OPERADORES_SUCCESS,
    response
  }
}

const getOperadoresError = (error) => {
  return {
    type: GET_OPERADORES_ERROR,
    error
  }
}

export const getOperadoresRequest = (empresaId) => {
  const request = axios.get(`${api.localhost}${api.port}/operadores/listar?clienteId=${empresaId}`);

  return dispatch => {
    dispatch(getOperadores());

    return request.then( (response) => {
      console.log("GET OPERADORES SUCCESS", response);
      dispatch(getOperadoresSuccess(response.data));
    }).catch( (error) => {
      dispatch(getOperadoresError(error));
    });
  }
}
