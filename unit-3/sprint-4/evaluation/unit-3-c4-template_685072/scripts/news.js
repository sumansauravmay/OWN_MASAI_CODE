// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar();

let showNews=[];
    let arr=JSON.parse(localStorage.getItem("news"))
    showNews.push(arr);

    let append=(data)=>{
        let container=document.querySelector("#detailed_news");
        container.innerHTML="";
        data.forEach((elem)=>{
    
            let img=document.createElement("img")
            img.src=elem.urlToImage;
    
            let title=document.createElement("h3")
            title.innerText=elem.title;
    
            let description=document.createElement("p")
            description=elem.description;
    
            let div=document.createElement("div")
            div.onclick=()=>{
                savenews(elem)
            }
    
            div.append(img,title,description)
    
            container.append(div)
        })
    }
    append(showNews)

