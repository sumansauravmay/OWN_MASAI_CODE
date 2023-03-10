import { store } from "./redux/store.js";
import { increment,decrement } from "./redux/actions.js";

console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
console.log(store.getState());