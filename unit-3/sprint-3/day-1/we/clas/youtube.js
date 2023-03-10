let search=async() => {
let query=document.querySelector("#query").value;
 let data=await getData(query);
append(data)

}

let getData=async (query)=> {

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyDwOj4_IkBSL9Jnj346rQiGotxQr_dbkA8`;
    let res=await fetch(url);
    let data=await res.json();
    return data.items 
console.log(data) 
}
let append=(data)=>{
container=document.querySelector("#container");
container.innerHTML="";

data.forEach((elem)=>{

    let image=document.createElement("img")
   image.src=elem.snippet.thumbnails.medium.url;

let title=document.createElement("p")
title.innerText=elem.snippet.title;

  let div=document.createElement("div");
  div.onclick=()=>{
    saveVideo(elem);
  }

  div.setAttribute("class","video")

  div.append(image,title)
  container.append(div);  
})
}

let saveVideo=(data)=>{
localStorage.setItem("video",JSON.stringify(data))

window.location.href="video.html";

}
