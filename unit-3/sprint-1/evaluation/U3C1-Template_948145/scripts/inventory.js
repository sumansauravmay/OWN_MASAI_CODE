function alldetails(){

     let data=JSON.parse(localStorage.getItem("productkey"))||[];

    let products_data=document.querySelector("#products_data");

data.forEach(function(el,index){

    let div=document.createElement("div");
    
    let brand=document.createElement("h4");
    brand.innerText=el.product_brand;

    let name=document.createElement("p");
    name.innerText=el.product_name;

    let price=document.createElement("p");
    price.innerText=el.product_price;

    let image=document.createElement("img");
   image.src=el.product_image;

   let cart=document.createElement("button");
   cart.innertext="Add to cart";




   let remove=document.createElement("button");
   remove.innertext="Remove";
remove.addEventListener("click",function(){
    remove()
})
div.append(brand,name,price,image,cart,remove)
products_data.append(div);
})
}
function  remove(){
   let data=JSON.parse(localStorage.getItem("productkey"))||[];
   data.splice(index,1)
}
alldetails();