function append(){

    let data=JSON.parse(localStorage.getItem("studenthello"))||[];

let container=document.querySelector("#container");

data.forEach(function(el,index)
{
let div=document.createElement("div");

let img=document.createElement("img");
img.src=el.image;

let p=document.createElement("p");
p.innerText=el.name;

let btn=document.createElement("button");
btn.innerText="Delete";
// btn.addEventListener("click",function(){
//     remove(index)
// })
div.append(img,p,btn);

container.append(div);
})
}
// function remove(index){

//     let data=JSON.parse(localStorage.getItem("studenthello"))||[];
// let newData=data.filter(function(el,i){
//     if(i==index)
//     {
//         let trash=JSON.parse(localStorage.getItem("trash"))||[];
//         trash.push(el);
//         localStorage.setItem("trash",JSON.stringify(trash));
//     }
//     else{
//         return i!==index;
//     }
// });
// localStorage.setItem("studenthello",JSON.stringify(newData))
// // append();
// }
append();

