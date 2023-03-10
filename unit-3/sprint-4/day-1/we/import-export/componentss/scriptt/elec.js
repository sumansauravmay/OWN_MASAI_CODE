import navbar from "../componentss/navbar.js";

// console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar();

const url="https://fakestoreapi.com/products/category/electronics";

let getData=async ()=>{
    let res=await fetch(url)
    let data=await res.json();
    console.log(data)
    append(data)
}
getData();

let append=(data)=>{

let container=document.querySelector("#container");

data.forEach(({image,title,price})=>{

    let img=document.createElement("img")
    img.src=image;

    let title2=document.createElement("h4")
    title2.innerText=title;

    let price2=document.createElement("p")
    price2.innerText=price;

    let div=document.createElement("div")
    div.append(img,title2,price2);
    container.append(div);
})


}

