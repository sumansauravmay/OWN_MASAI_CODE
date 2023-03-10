import axios from "axios";
import {GET_POSTS_ERROR,
    GET_POSTS_LOADING,
    GET_POSTS_SUCCESS} from "./posts.types"

export const getPosts=()=>async (dispatch)=>{
    
dispatch({type:GET_POSTS_LOADING});
try{
    let response=await axios.get(`http://localhost:8080/posts`);
    dispatch({type: GET_POSTS_SUCCESS, payload: response.data})
} 
catch(e){
    dispatch({ type : GET_POSTS_ERROR, payload : e.message})
}
};



