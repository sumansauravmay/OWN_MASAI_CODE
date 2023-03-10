import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.types"



const initailState={
    loading:false,
    error:"",
    product:[]
}

export const productreducer=(state=initailState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_LOADING:{
            return {
                ...state,
                loading:true,
                error:""
            }
        }
        case GET_PRODUCT_SUCCESS:{
            return {
                ...state,
                loading:false,
                product:payload
            }
        }
        case GET_PRODUCT_ERROR:{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        default:{
            return state;
        }
    }
}
