
export enum itemType{
    Completed="Completed",
    Pending="Pending",
    Revision="Revision",
    New="New"
}


export type item={
    id:number;
    type:itemType;
    message:string;
    likes:number
}

export const ColorMap:Record<itemType,string>={
    Completed:"green",
    Pending:"red",
    Revision:"blue",
    New:"yellow"
}