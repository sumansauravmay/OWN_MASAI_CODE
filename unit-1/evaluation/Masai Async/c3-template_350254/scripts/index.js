

let data;
function main(){
  let query=document.querySelector("#query").value;
  getData(query);
 
}
document.querySelector("#query").addEventListener("keydown",main);


  async function getData(query){
    
      let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
      let res=await fetch(url)
      data=await res.json();
      // console.log(data.hotels); 
    console.log(data)
      append(data.hotels) 
  }
  function append(data){
  let container=document.querySelector("#hotels_list");
  container.innerHTML="";
 
  data.forEach(function(elem){
  
  let img=document.createElement("img")
  img.src=elem.Images.one;
  
  let title=document.createElement("p")
  title.innerText=elem.Title;
  
  let price=document.createElement("p")
  price.innerText=elem.Price;
  
  let rating=document.createElement("p")
  rating.innerText=elem.Rating;
  
  let ac_status=document.createElement("p")
  ac_status.innerText=elem.Ac;
  
  let button=document.createElement("button")
  button.innerText="Book";
  // button.setAttribute("class","nextpage")
  
  let div=document.createElement("div")
  div.onclick=function(){
    savepic(elem)
  }
  div.append(img,title,price,rating,ac_status,button)
  container.append(div)
  })
  }



  let userdata=JSON.parse(localStorage.getItem("login"))
// console.log(userdata)
let login=document.getElementById("login")
// console.log(login)
if(userdata===null){
  login.innerText="login"
}
else
{
  for(let i=0;i<userdata.length;i++)
  {
 login.innerText=userdata[i].customerName
  }
}



  let savepic=(data)=>{
    localStorage.setItem("pic",JSON.stringify(data))
    // alert("Please login!!")
    if(login.innerText=="login")
    {
      alert("Please login")
      window.location.href="login.html";
    }
    else
    {
      window.location.href="checkout.html";
    }
    
  }

  let sortLowtoHigh=document.querySelector("#sort_lth");
  sortLowtoHigh.addEventListener("click",function(){
    sortingpath(data.hotels)
  })
   



 function sortingpath(data){
    data.sort((a,b)=>{
      return a.Price-b.Price;
      
    })
    // console.log(data)
   append(data);
  }
 let highToLow=document.querySelector("#sort_htl");
 highToLow.addEventListener("click",function(){
  sortHighToLow(data.hotels)
 })
 function sortHighToLow(data){
data.sort((a,b)=>{
return b.Price-a.Price;
})
// console.log(data)
append(data);
 }
 




let filterAc=document.querySelector("#filter_ac")
filterAc.addEventListener("click",function(){
 filterAcTrue(data.hotels)
})

function filterAcTrue(data){
  let filter=data.filter((elem)=>{
    return elem.Ac===true;
  })
  append(filter)
}



let filterNonAc=document.querySelector("#filter_nonac")
filterNonAc.addEventListener("click",function(){
 filterNonAcfalse(data.hotels)
})

function filterNonAcfalse(data){
  let filtered=data.filter((elem)=>{
    return elem.Ac===false;
  })
  append(filtered)
}
 




