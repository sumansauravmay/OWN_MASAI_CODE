import { TOGGLE_THEME } from "./theme.Types"




const initialValue={
    theme:"white",
   
}
export const themeReducer=(state=initialValue,action)=>{
    switch(action.type){
        case TOGGLE_THEME:{
            return {
                ...state,
                theme:state.theme==="white"?"black":"white",
            }
        }
        default:{
            return state
        }
    }
}