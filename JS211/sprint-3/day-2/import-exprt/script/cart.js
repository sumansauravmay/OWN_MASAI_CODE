import navbar from "../component/navbar.js";
// console.log(navbar());

document.querySelector("#navbar").innerHTML=navbar();


let data2=[];
let arr=JSON.parse(localStorage.getItem("cartItem"));
data2.push(arr);



let append=(data,index)=>{
    let container=document.querySelector("#container");
    container.innerHTML=null;
    data.forEach((elem)=>{
        let name=document.createElement("h2")
        name.innerText=elem.strCategory;

        let id=document.createElement("p")
        id.innerText=elem.idCategory;
        let description=document.createElement("p")
        description.innerText=elem.strCategoryDescription;

        let del=document.createElement("button")
        del.innerText="Remove";
        del.onclick=()=>{
            deletefunc(elem)
        }

        let div=document.createElement("div")
        

        div.append(id,name,description,del)

        container.append(div);
    })
}
append(data2);

let deletefunc=(index)=>{
    // let data2=JSON.parse(localStorage.getItem("cartItem"))
    data2.splice(index,1)
    localStorage.setItem("cartItem",JSON.stringify(data2));
    append(data2);
}