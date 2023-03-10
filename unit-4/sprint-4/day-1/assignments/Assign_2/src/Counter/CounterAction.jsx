


export const reducer=(state,action)=>{
    switch(action.type)
    {
      case "increament":
        return{
          ...state,
          count:state.count+1
        };
  
        case "decreamen":
        return{
          ...state,
          count:state.count+1
        };
        case "reset":
          return {
            ...state,
            count:0
          };
          case "increament_by_value":
            return {
              ...state,
              count:state.count+action.payload
            }
            case "decreament_by_value":
              return {
                ...state,
                count:state.count-action.payload
              };
              default :
              return state;
  
    }
    }
    