const fetchdata=async()=>{
    let url="https://jsonplaceholder.typicode.com/comments";
    let res=await fetch(url);
    let data=await res.json();
    appenddatafunc(data)
    console.log(data)
}
fetchdata()

function appenddatafunc(data){
data.map((item)=>{
    
    let div=document.createElement("div")
    div.setAttribute("class","infinte_style_div")

    let body=document.createElement("p")
    body.innerText=item.body;
    body.setAttribute("class","infinte_style_body")
   

    let num=document.createElement("h2")
    num.innerText=item.id;
    num.setAttribute("class","infinte_style_num")

     
document.querySelector("#InfiniteScroll").append(div)
div.append(num,body)
})

}
