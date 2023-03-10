import { GET_POSTS_ERROR,
     GET_POSTS_LOADING,
      GET_POSTS_SUCCESS } from "./posts.types";



const initialState={
    loading:false,
    error:"",
    posts:[],
}


export const postsReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case GET_POSTS_LOADING:{
            return {
                ...state,
        loading:true,
        error:"",
            }
        }

        case GET_POSTS_SUCCESS:{
            return {
                ...state,
        loading:false,
        posts:payload,
            }
        }
        

case GET_POSTS_ERROR:{
    return {
        ...state,
loading:false,
error:payload,
    }
}

        default:{
            return state;
        }
    }
}



