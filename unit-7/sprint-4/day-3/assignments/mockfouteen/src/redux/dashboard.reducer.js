import {CRITICAL_SEVERITY} from "./dashboard.types";


const initialState={
    criticasl:[]
    
}

export const productreducer=(state=initialState,{type,payload})=>{
    switch(type){
        case CRITICAL_SEVERITY:{
            return {
                ...state,
                criticasl:payload
            }
        }
       
default:{
    return state
}
    }
}