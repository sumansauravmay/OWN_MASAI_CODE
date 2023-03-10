

export const handleincrement={
    type:"increament"
   
  }
  
  export const handledecrement={
    type:"decreament"
   
  }
  export const resetAction={
    type:"Reset"
  }
  export const increamentByValue=(value)=>{
    return {
      type:"increament_by_value",
      payload:value
    }
  }
  
  export const decreamentByValue=(value)=>{
    return {
      type:"decreament_by_value",
      payload:value
    }
  }
  