//store the products array in localstorage as "data"
function productall(b,n,p,i){
    this.product_brand=b;
    this.product_name=n;
    this.product_price=p;
    this.product_image=i;
}


function products(e)
{
e.preventDefault();
let form=document.querySelector("#product_form");

let product_brand=form.product_brand.value;
let product_name=form.product_name.value;
let product_price=form.product_price.value;
let product_image=form.product_image.value;


let s=new productall( product_brand, product_name, product_price, product_image);

let data=JSON.parse(localStorage.getItem("productkey"))||[];

data.push(s);
localStorage.setItem("productkey",JSON.stringify(data));
console.log(s)
}
function showproduct()
{
    let data=JSON.parse(localStorage.getItem("productkey"))||[];
    let obj={};
    
}
