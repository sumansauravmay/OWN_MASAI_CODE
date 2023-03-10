import { store } from "./redux/store.js";
import { increment,decrement,addTodo,updateTodo,DeleteTodo} from "./redux/actions.js";

console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(addTodo("hello"))
console.log(store.getState());