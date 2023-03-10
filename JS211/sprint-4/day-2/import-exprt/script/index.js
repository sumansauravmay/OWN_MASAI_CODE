import navbar from "../component/navbar.js";
// console.log(navbar());

document.querySelector("#navbar").innerHTML=navbar();

// idCategory: "1"
// strCategory: "Beef"
// strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb: "https://www.themealdb.com/images/category/beef.png"

let getData=async()=>{
    let url=`https://www.themealdb.com/api/json/v1/1/categories.php`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.categories)
    // arr.push(data.categories)
    append(data.categories)
}

let container=document.querySelector("#container");
container.innerHTML=null;
let append=(data)=>{
    // let container=document.querySelector("#container");
    // container.innerHTML=null;
    data.forEach((elem)=>{
        let name=document.createElement("h2")
        name.innerText=elem.strCategory;

        let id=document.createElement("p")
        id.innerText=elem.idCategory;

        let description=document.createElement("p")
        description.innerText=elem.strCategoryDescription;

        let cart=document.createElement("button")
        cart.innerText="Add to cart";
        cart.onclick=()=>{
            addToCartfunc(elem)
        }

        let div=document.createElement("div")
        

        div.append(id,name,description,cart)

        container.append(div);
    })
}


let addToCartfunc=(data)=>{

    localStorage.setItem("cartItem",JSON.stringify(data));
    // window.location.href="cart.html";
}

getData();




//localStorage.setItem("foodie",JSON.stringify(res));
let arr=[];
let getlocals=JSON.parse(localStorage.getItem("foodie"))
arr.push(getlocals)
console.log(arr)

// id: 1661020984539
// image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png"
// price: "1000"
// title: "masai unique"

let appendfromlocal=(arr)=>{
    // container.innerHTML=null;

    arr.forEach((elem)=>{
        let name=document.createElement("h2")
        name.innerText=elem.title;

        let id=document.createElement("p")
        id.innerText=elem.price;

        let description=document.createElement("p")
        description.innerText=elem.image;

        let cart=document.createElement("button")
        cart.innerText="Add to cart";
        cart.onclick=()=>{
            addToCartfunc(elem)
        }

        let div=document.createElement("div")
        

        div.append(description,id,name,cart)

        container.append(div);
    })
}

appendfromlocal(arr)