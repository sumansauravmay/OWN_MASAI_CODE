/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

function details(b,n,p,i){
this.mobile_brand=b;
this.mobile_name=n;
this.mobile_price=p;
this.mobile_image=i;
}
let submit=()=>{
     mobile_brand=document.querySelector("#mobile_brand").value;
     mobile_name=document.querySelector("#mobile_name").value;
     mobile_price=document.querySelector("#mobile_price").value;
     mobile_image=document.querySelector("#mobile_image").value;

let s1=new details(mobile_brand,mobile_name,mobile_price,mobile_image)
console.log(s1)
let data=JSON.parse(localStorage.getItem("mobile_data"))|| [];
data.push(s1);
localStorage.setItem("mobile_data",JSON.stringify(data));

}
