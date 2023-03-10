

window.addEventListener("load",()=>{
    getData()
})
let getData=async()=>{
    let res=await fetch("https://infinite-brushlands-51927.herokuapp.com/api/adminAddd");
    let data=await res.json();
    console.log(data)
    renderDom(data)
}
let renderDom=(data)=>{
    let container=document.querySelector("#container");
    container.innerHTML=null;
    data.forEach(({image,name,price,description,delivery,id})=>{

        let image2=document.createElement("img")
        image2.src=image;

        let name2=document.createElement("h2")
        name2.innerText=name;

        let price2=document.createElement("p")
        price2.innerText=price;

        let description2=document.createElement("p")
        description2.innerText=description;

        let delivery2=document.createElement("p")
        delivery2.innerText=`delivery by:${delivery}`;

        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.onclick=()=>{
            remove_btn(id)
        }

        let edit=document.createElement("button")
        edit.innerText="Edit"
        edit.onclick=()=>{
           editUserDetails(id)
        }

        let div=document.createElement("div")

        div.append(image2,name2,price2,description2,delivery2,remove,edit)

        container.append(div)
    })
    
}


let submit_btn=document.querySelector("#add_product")
submit_btn.onclick=()=>{
    adduserDetails(event)
}
let adduserDetails=async(e)=>{
    e.preventDefault();
    let data={
        id:Date.now(),
        image:document.querySelector("#image").value,
        name:document.querySelector("#name").value,
        price:document.querySelector("#price").value,
        description:document.querySelector("#description").value,
        delivery:document.querySelector("#delivery").value,
        
    }
    // console.log(data)
   
    let res=await fetch("https://infinite-brushlands-51927.herokuapp.com/api/adminAddd",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
              "Content-Type":"application/json",
        }
    })
    getData();
    let userData=await res.json();
    console.log(userData)
}


let remove_btn=async(id)=>{
let res=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd/${id}`,{
method:"DELETE",
headers:{
    "Content-Type":"application/json",
}
})
getData();
}

let sort=async()=>{
let res=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd?_sort=price&_order=asc`)
res=await res.json()
renderDom(res);
}


let sort2=async()=>{
let res=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd?_sort=price&_order=desc`)
res=await res.json()
renderDom(res);
}

let filter=async()=>{
    if(price<=4000)
    {
        let res=await fetch (`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd/?price`)
        res=await res.json();
        renderDom(res)
    } 
}

let editUserDetails=async(id)=>{

let todo=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd/${id}`);

let new_price=window.prompt("enter price here")

let data={price:new_price || todo.price};

let res=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/adminAddd/${id}`,
{
method:"PATCH",
body:JSON.stringify(data),
headers:{
"Content-Type":"application/json",
},
});
getData()
}






