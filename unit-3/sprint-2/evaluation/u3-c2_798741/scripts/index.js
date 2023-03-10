async function getData(){
    
    let url=`https://grocery-masai.herokuapp.com/items`;
    let res=await fetch(url)
    let data=await res.json();
    console.log(data)
    // append(data.data)
}
getData()
function append(data){
     let container=document.querySelector("#container")
container.innerHTML="";
data.forEach(function(elem){

    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=elem.image;
    let name=doaument.createElement("h3")
    name.innerText=elem.name;

    let price=document.createElement("p")
    price.innerText=elem.price;

    let cart=document.createElement("button")
    cart.innerText="Add to Cart"

    div.append(image,name,price,cart)
    container.append(div)
})
}

   
    
