import { USERLOGIN } from "./user.type";

const initialdata={
    data:[]
}
export const userreducer=(state=initialdata,{type,payload})=>{
switch(type){
    case USERLOGIN:{
        localStorage.setItem("data",JSON.stringify(payload))
        return {
            ...state,
            data:payload
        }
    }
    default:{
        return state;
    }
}
}

