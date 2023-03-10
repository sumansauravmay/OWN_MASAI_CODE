//object literal

const user:{
    id:number,
    name:string
}={
    id:1,
    name:"Suman"
}

// user={lastName:"Saurav"} //error

user.name="Saurav" //ok

let question:Record<string,boolean>={
    isMarried:true,
    isEmployed:false,
    isIndian:true,
    // name:"Suman"//error
}

question.isHuman=true
// question.name="Suman Saurav"