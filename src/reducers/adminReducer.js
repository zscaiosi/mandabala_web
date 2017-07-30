import {
  POST_LOGIN_ADMIN,
  POST_LOGIN_ADMIN_SUCCESS,
  POST_LOGIN_ADMIN_ERROR
} from "../actions/adminActions";

const ADMIN_STATE = {
  isPostingLoginAdmin: false,
  postLoginAdminSuccess: null,
  postLoginAdminError: null
}

export const admin = (state = ADMIN_STATE, action) => {
  switch(action.type){
    case POST_LOGIN_ADMIN:
      return{
        ...state,
        isPostingLoginAdmin: true,
        postLoginAdminSuccess: null,
        postLoginAdminError: null
      }
    case POST_LOGIN_ADMIN_SUCCESS:
      return{
        ...state,
        isPostingLoginAdmin: false,
        postLoginAdminSuccess: action.res,
        postLoginAdminError: null        
      }
    case POST_LOGIN_ADMIN_ERROR:
      return{
        ...state,
        isPostingLoginAdmin: false,
        postLoginAdminSuccess: null,
        postLoginAdminError: action.err
      }
    default:
      return{
        ...state
      }
  }
}