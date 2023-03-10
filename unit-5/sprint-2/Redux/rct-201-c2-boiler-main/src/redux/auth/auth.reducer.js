import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, RESET_AUTH } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case AUTH_SIGN_IN_ERROR:{
      return {
        ...state,
        error:true,
        loading:false
      }
    }
    case AUTH_SIGN_IN_LOADING:{
      return {
        ...state,
        error:false,
        loading:true
      }
    }
    case AUTH_SIGN_IN_SUCCESS:{
      return {
        ...state,
        error:false,
        loading:false,
        data:{
          token:payload.token,
          isAuthenticated:true
        }
      }
    } 
    case RESET_AUTH:{return    state }
    case AUTH_SIGN_OUT:{
      return {
        ...state,
        error:false,
        loading:false,
        data:{
          token: "",
          isAuthenticated: false,
        }
      }
    }
    default: return state;
  }
 
};
