import {INC,DEC} from "./actionTypes";

export const increment=(payload=1)=>({type:INC,payload});

export const decrement=(payload=5)=>({type:DEC,payload});

