// let button=document.createElement("button");
// button.innerText="Add";
// button.onclick=()=>{
//     alert("Hardik Hardik badhai!")
// }

let root=document.querySelector("#root");
let count=0;
// let properties={
//     text:"Add",
//     onClick:()=>{}
// }


function Button(properties){
    const {text,onClick}=properties;
    let button=document.createElement("button");
    button.innerText=text;
    button.onclick=onClick;
    return button;
}

let addBtn=Button({
    text:"Add",
    
onClick:()=>{
    count++;
   
},
});

let reduceBtn=Button({
    text:"Reduce",
    
onClick:()=>{
    count--;
    
},
});

function header(properties){
    const {text,level}=properties;
    // let header=document.createElement("h1");
    let header=document.createElement(`h${level}`);
    header.innerText=text;
    return header;
}
let headerbtn=header({
        text:`counter: ${count}`,
        level:1,
}
)

root.append(headerbtn,addBtn,reduceBtn);