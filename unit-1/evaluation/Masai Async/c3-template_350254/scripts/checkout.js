let hotelpic=[];
    let arr=JSON.parse(localStorage.getItem("pic"));
  
    hotelpic.push(arr)
    // console.log(hotelpic)
  
    function append(data){
      let container=document.querySelector("#hotel_details");
      let book=document.querySelector("#book")
book.addEventListener("click",function(){
  button()
})
      container.innerHTML="";
data.forEach(function(elem){

let img=document.createElement("img")
img.src=elem.Images.one;

img2=document.createElement("img")
img2.src=elem.Images.two;

let title=document.createElement("p")
title.innerText=elem.Title;

let price=document.createElement("p")
price.innerText=elem.Price;

let rating=document.createElement("p")
rating.innerText=elem.Rating;

// let button=document.createElement("button")
// button.innerText="Book";
// let book=document.querySelector("#book")
// book.addEventListener("click",function(){
//   book(elem)
// })

let div=document.createElement("div")

div.append(img,img2,title,price,rating)
container.append(div)
})

}

append(hotelpic)

let user_name=document.querySelector("#user_name");

function button(){
  setTimeout(function(){
    alert(`${user_name.innerText},Hotel booked successfully`)
  },5000)
 
}
