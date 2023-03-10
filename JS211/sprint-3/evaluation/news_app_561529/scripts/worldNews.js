import navbar from "../component/navbar.js";
// console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar(); 



let userDetails=JSON.parse(localStorage.getItem("user"));

function userDetails2(){
    
let container=document.querySelector("#userDetails");
container.innerHTML="";

userDetails.forEach((elem)=>{

    let img=document.createElement("img")
    img.src=elem.user_pic;

    let name=document.createElement("h3");
    name.innerText=elem.user_name;

    let email=document.createElement("p");
    email.innerText=elem.user_email;

   let country=document.createElement("p");
    country.innerText=elem.user_country;
    

    container.append(img,name,email,country)
})
}
userDetails2();



//append news here

let container=document.querySelector("#news_result")
    container.innerHTML="";

document.querySelector("#india").addEventListener("click",function(){
    newIndia()
});
let newIndia=async()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
let data=await res.json();
console.log(data.articles)
append(data.articles)


}
let append=(data)=>{
    // let container=document.querySelector("#news_result")
    container.innerHTML="";
    data.forEach((elem)=>{
let img=document.createElement("img")
img.src=elem.urlToImage;

let title=document.createElement("h1")
title.innerText=elem.title;

let autor=document.createElement("p")
autor.innerText=elem.author;

let div=document.createElement("div")
div.onclick=()=>{
    detailsnews(elem)
}

div.append(img,title,autor)

container.append(div)
    })
    
}







document.querySelector("#usa").addEventListener("click",function(){
    newusa()
});
let newusa=async()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`);
let data=await res.json();
console.log(data.articles)
append2(data.articles)

}
let append2=(data)=>{
    container.innerHTML="";
    data.forEach((elem)=>{
let img=document.createElement("img")
img.src=elem.urlToImage;

let title=document.createElement("h1")
title.innerText=elem.title;

let autor=document.createElement("p")
autor.innerText=elem.author;

let div=document.createElement("div")
div.onclick=()=>{
    detailsnews(elem)
}

div.append(img,title,autor)

container.append(div)
    })
}








document.querySelector("#uks").addEventListener("click",function(){
    newuk()
});
let newuk=async()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`);
let data=await res.json();
console.log(data.articles)
append3(data.articles)

}
let append3=(data)=>{
    container.innerHTML="";
    data.forEach((elem)=>{
let img=document.createElement("img")
img.src=elem.urlToImage;

let title=document.createElement("h1")
title.innerText=elem.title;

let autor=document.createElement("p")
autor.innerText=elem.author;

let div=document.createElement("div")
div.onclick=()=>{
    detailsnews(elem)
}

div.append(img,title,autor)

container.append(div)
    })
}






document.querySelector("#nzs").addEventListener("click",function(){
    newnz()
});
let newnz=async()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`);
let data=await res.json();
console.log(data.articles)
append4(data.articles)

}
let append4=(data)=>{
    container.innerHTML="";
    data.forEach((elem)=>{
let img=document.createElement("img")
img.src=elem.urlToImage;

let title=document.createElement("h1")
title.innerText=elem.title;

let autor=document.createElement("p")
autor.innerText=elem.author;

let div=document.createElement("div")
div.onclick=()=>{
    detailsnews(elem)
}

div.append(img,title,autor)

container.append(div)
    })
}






document.querySelector("#china").addEventListener("click",function(){
    newchina()
});
let newchina=async()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`);
let data=await res.json();
console.log(data.articles)
append5(data.articles)

}
let append5=(data)=>{
    container.innerHTML="";
    data.forEach((elem)=>{
let img=document.createElement("img")
img.src=elem.urlToImage;

let title=document.createElement("h1")
title.innerText=elem.title;

let autor=document.createElement("p")
autor.innerText=elem.author;

let div=document.createElement("div")
div.onclick=()=>{
    detailsnews(elem)
}

div.append(img,title,autor)

container.append(div)
    })
}


document.querySelector("#search_box").addEventListener("search",function(){
    searchnews()
})
let searchnews=async()=>{
    let query=document.querySelector("#search_box").value;
    let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`);
    let data=await res.json();
    console.log(data.articles)
    append6(data.articles)
}
let append6=(data)=>{
    container.innerHTML="";
    data.forEach((elem)=>{
        let img=document.createElement("img")
        img.src=elem.urlToImage;
        
        let title=document.createElement("h1")
        title.innerText=elem.title;
        
        let autor=document.createElement("p")
        autor.innerText=elem.author;
        
        let div=document.createElement("div")
        div.onclick=()=>{
            detailsnews(elem)
        }
        
        div.append(img,title,autor)
        
        container.append(div)
            })
}

let detailsnews=(data)=>{
    localStorage.setItem("detailscom",JSON.stringify(data));
    window.location.href="news.html";

}


let defaultvalue=userDetails[userDetails.length-1].user_country;
console.log(defaultvalue)
if(defaultvalue=="in")
{
    newIndia()
}
else if(defaultvalue=="usa")
{
    newusa()
}
else if(defaultvalue=="uk")
{
    newuk()
}
else if(defaultvalue=="nz")
{
    newnz()
}
else if(defaultvalue=="ch")
{
    newchina()
}

