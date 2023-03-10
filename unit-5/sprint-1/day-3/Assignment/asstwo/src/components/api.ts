import axios,{AxiosResponse} from "axios";
import { Todo,TodoType } from "./constants";

//getTodos

export const getTodos=async (): Promise<Todo[]>=>{ 
    //you can skip the promise<Todo[]> in case only one return
let response:AxiosResponse<Todo[]> =await axios.get(
    "http://localhost:8080/todos"
    )
return response.data
}


//updateTodos
// (todo parameter and return updatedTodo)

export const updateTodo = async (changedTodo:Todo) : Promise<Todo> =>{

    let response:AxiosResponse<Todo> =await axios.patch(
        `http://localhost:8080/todos/${changedTodo.id}`,
        {
            ...changedTodo,
        }
       
        );
     return response.data;

}

//addTodo
export const addTodo=async(message:string,type:TodoType):Promise<Todo>=>{
    let response:AxiosResponse<Todo> =await axios.post(
        `http://localhost:8080/todos`,{
            message,
            type,
            likes:0
        }
        )
    return response.data
}


//deleteTodos