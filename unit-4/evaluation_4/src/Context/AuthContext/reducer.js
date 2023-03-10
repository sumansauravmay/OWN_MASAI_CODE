// reducer related to auth state;

 import { LOGIN, LOGOUT } from "./action";
export default function reducer(state, { type, payload }) {
  switch (type) {

case "LOADING_SUCCESS":{
  return {
    ...state,
    token: null, 
    isAuth: false ,
    isLoading:true,
    isError:false
  }
}

    case LOGIN: {
      return { 
        ...state,
         token: payload, 
         isAuth: true ,
         isLoading:false,
         isError:false
        };
    }
    case LOGOUT: {
      return { 
        ...state,
         token: null,
          isAuth: false,
          isLoading:false,
          isError:true
         };
    }
    default:
      return state;
  }
}

