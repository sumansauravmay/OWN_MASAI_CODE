import { INC,DEC } from "./counter.Types";

export const increment=()=>({type:INC,payload:1});

export const decrement=()=>({type:DEC,payload:1});