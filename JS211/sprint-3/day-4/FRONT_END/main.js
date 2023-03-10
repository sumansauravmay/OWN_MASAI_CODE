//get request
//base url:- http://localhost:3000/api/todo
//end point:- /todo(room)

window.addEventListener("load",()=>{
    getData()
})
let getData=async()=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo`);
let data=await res.json();

// console.log(data)

renderdom(data)
}

let renderdom=(data)=>{
    //title
    //status
    //id
    //toggle button
    //Remove button

let container=document.querySelector("#container");
container.innerHTML="";
data.forEach(({title,id,status})=>{

let div=document.createElement("div");

let h3=document.createElement("h3");
h3.innerText=title;

let p=document.createElement("p");
p.innerText=status;

let toggle_btn=document.createElement("button");
toggle_btn.innerText="Toggle";
toggle_btn.onclick=()=>{
    toggletodo(id)
}

let remove_btn=document.createElement("button");
remove_btn.innerText="Remove";
remove_btn.onclick=()=>{
    deleteTodo(id)
}

div.append(h3,p,toggle_btn,remove_btn)

container.append(div)
})

}

//crud=> create(post),read(get),update(put & patch), delete(delete)


let addTodo=async()=>{
    let todo=document.querySelector("#todo").value;

    let data={
        title:todo,
        status:false,
        id: Date.now(),
    };

let res=await fetch("https://tranquil-hollows-10055.herokuapp.com/api/todo",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
"Content-Type":"application/json",
    },
});

getData()//it will automativ append data after clicking on add

res=await res.json();
console.log(res);

}


//put(home work) and patch request

let toggletodo=async(id)=>{
let todo=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo/${id}`)
todo=await todo.json();
// console.log(todo)
let data={
    status:!todo.status
};
let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo/${id}`,{
    method:"PATCH",
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json",
    },
})
getData()

res=await res.json();
console.log(res);
};

//put(replaces)
// {
//     title:"task1",
//     status:false

// }
// {status:true}
//patch(modifies)
// {
//     title:"task1",
//     status:true
// }

//delete=>
let deleteTodo=async (id)=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        },
    });

    getData()
};

// function request(url,type,body)
// {

// }

// Edit
// Title

// let person= prompt("enter your name");
// console.log(person)


//sorting part

let sort=async()=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo?_sort=title&_order=asc`)
    res=await res.json();
    renderdom(res);
}
let sort2=async()=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo?_sort=title&_order=desc`)
    res=await res.json();
    renderdom(res);
}

//pagenation

let page1=async()=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo?_page=1&_limit=3`)
    res=await res.json();
    renderdom(res);
}

let page2=async()=>{
    let res=await fetch(`https://tranquil-hollows-10055.herokuapp.com/api/todo?_page=2&_limit=3`)
    res=await res.json();
    renderdom(res);
}