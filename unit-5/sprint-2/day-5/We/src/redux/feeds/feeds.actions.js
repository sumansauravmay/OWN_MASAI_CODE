import axios from "axios";
import {GET_FEEDS_ERROR,
    GET_FEEDS_LOADING,
    GET_FEEDS_SUCCESS} from "./feeds.types"

export const getFeeds=async (dispatch)=>{
    
dispatch({type:GET_FEEDS_LOADING});
try{
    let response=await axios.get(`http://localhost:8080/feeds`);
    dispatch({type: GET_FEEDS_SUCCESS, payload: response.data})
} 
catch(e){
    dispatch({ type : GET_FEEDS_ERROR, payload : e.message})
}
};



