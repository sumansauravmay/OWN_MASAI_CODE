import React from "react";
    
type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
   toggleStatus:(id:number)=>void;
};

const TodoItem = ({ id, content, isCompleted,toggleStatus }: TodoItemProp) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    onClick={()=>toggleStatus(id)}
    >
      <div>
        {content} - {isCompleted ? "Done" : "Not Done"}
      </div>
    </div>
  );
};

export default React.memo(TodoItem);


// , (prevProps,nextProps)=>{
//   if(
//     prevProps.id!==nextProps.id ||
//     prevProps.isCompleted!==nextProps.isCompleted ||
//     prevProps.content!==nextProps.content
//     )
//     {
//       return false
//     }
//   return true;
// }




