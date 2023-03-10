// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar();

async function getData()
{
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=in`
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append(data.articles)
}
getData();
let append=(data)=>{
    let container=document.querySelector("#results");
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

// articles: Array(19)
// 0:
// author: "Aanchal Magazine"
// content: "The Centre and the states are at loggerheads over taxes and duties on petrol and diesel. While the Centre feels the states are not reducing VAT in line with the Centre’s cut in excise duty, the state… [+6925 chars]"
// description: "The Prime Minister has noted that certain states have not reduced VAT; states have attributed rising fuel prices to central taxes. How is fuel taxed, and how are collections shared between the Centre and states?"
// publishedAt: "2022-04-29T06:02:45Z"
// source: {id: null, name: 'The Indian Express'}
// title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The Indian Express"
// url: "https://indianexpress.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
// urlToImage: "https://images.indianexpress.com/2022/04/fuel-price.jpeg"
// [[Prototype]]: Object

document.querySelector("#ch").addEventListener("click",function(){
    chinaNews()
})
async function chinaNews(){
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=ch`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append2(data.articles)
}

let append2=(data)=>{
    let container=document.querySelector("#results");
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



document.querySelector("#in").addEventListener("click",function(){
    indiaNews()
})
async function indiaNews(){
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=in`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append3(data.articles)
}

let append3=(data)=>{
    let container=document.querySelector("#results");
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



document.querySelector("#us").addEventListener("click",function(){
    usNews()
})
async function usNews(){
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=us`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append4(data.articles)
}

let append4=(data)=>{
    let container=document.querySelector("#results");
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



document.querySelector("#uk").addEventListener("click",function(){
    ukNews()
})
async function ukNews(){
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=uk`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append5(data.articles)
}

let append5=(data)=>{
    let container=document.querySelector("#results");
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




document.querySelector("#nz").addEventListener("click",function(){
    nzNews()
})

async function nzNews(){
    let url=`https://masai-api.herokuapp.com/news/top-headlines?country=nz`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data)
    append6(data.articles)
}

let append6=(data)=>{
    let container=document.querySelector("#results");
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
function savenews(data){
    localStorage.setItem("news",JSON.stringify(data))
    window.location.href="news.html";
}




document.querySelector("#search_input").addEventListener("keydown",seachpage)

async function seachpage(){
    let query=document.querySelector("#search_input").value;
let url=`https://masai-api.herokuapp.com/news?q=${query}`;
let res=await fetch(url);
let data=await res.json();
    console.log(data)
    appendx(data.articles)
}
let appendx=(data)=>{
    let container=document.querySelector("#results");
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
