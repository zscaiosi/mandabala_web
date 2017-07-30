import axios from 'axios';
import {api} from '../config.json';

export const POST_LOGIN_ADMIN = 'POST_LOGIN_ADMIN';
export const POST_LOGIN_ADMIN_SUCCESS = 'POST_LOGIN_ADMIN_SUCCESS';
export const POST_LOGIN_ADMIN_ERROR = 'POST_LOGIN_ADMIN_ERROR';

const postLoginAdmin = () => {
  return{
    type: POST_LOGIN_ADMIN
  }
}

const postLoginAdminSuccess = (res) => {
  return{
    type: POST_LOGIN_ADMIN_SUCCESS,
    res
  }
}

const postLoginAdminError = (err) => {
  return {
    type: POST_LOGIN_ADMIN_ERROR,
    err
  }
}

export const postLoginAdminRequest = (payload) => {

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const request = instance.post(`${api.url}${api.port}/admins/login`, payload);

  return dispatch => {
    dispatch(postLoginAdmin());

    return request.then(response => {
      dispatch(postLoginAdminSuccess(response));
    }).catch( error => {
      dispatch(postLoginAdminError(error))
    });
  }

}