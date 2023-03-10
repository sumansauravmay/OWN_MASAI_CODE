import React from "react";

function AddTodo({handleAdd}){
    const [text,setText]=React.useState([])

const handleChange=(e)=>{
    setText(e.target.value)
}

const handleSubmit=()=>{
    handleAdd(text)
}

    return (
        <>
            <h1>Add Todo</h1>
            <input value={text} 
            onChange={handleChange} 
            type="text" 
            placeholder="Add Todo"/>
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}
export default AddTodo;