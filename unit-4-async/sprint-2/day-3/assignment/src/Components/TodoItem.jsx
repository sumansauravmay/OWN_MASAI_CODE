import React from "react";

function TodoItem({title,status,id,handleToggle,handleDelete}){

    return (
        <div style={{display:"flex",gap:"20px"}}>
          <p>{title}</p>
          <p>{status?"Completed":"Not Completed"}</p>
          <button onClick={()=>handleToggle(id,!status)}>Toggle Status</button>
          <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}
export default TodoItem;