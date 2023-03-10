import navbar from "../component/navbar.js";
// console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar(); 


let userDetails=JSON.parse(localStorage.getItem("user"));
function userDetails2(){
let container=document.querySelector("#userDetails");
container.innerHTML="";
userDetails.forEach((elem)=>{

    let img=document.createElement("img")
    img.src=elem.user_pic;

    let name=document.createElement("h3");
    name.innerText=elem.user_name;

    let email=document.createElement("p");
    email.innerText=elem.user_email;

   let country=document.createElement("p");
    country.innerText=elem.user_country;
    

    container.append(img,name,email,country)
})
}
userDetails2();




let newpic=[]
let arr=JSON.parse(localStorage.getItem("detailscom"));
newpic.push(arr)
function append(data){
    let container=document.querySelector("#detailed_news")
    container.innerHTML=null;
    data.forEach((elem)=>{

        let img=document.createElement("img");
        img.src=elem.urlToImage;

        let name=document.createElement("h3");
        name.innerText=elem.source.name;

let description=document.createElement("h4");
description.innerText=elem.description;

let div=document.createElement("div");

div.append(img,name,description)
container.append(div);
    })
}
append(newpic);

