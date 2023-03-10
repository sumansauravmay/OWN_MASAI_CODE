// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wall=JSON.parse(localStorage.getItem("walletAmount"))
document.querySelector("#wallet").innerText=wall[0].wallet;

let getData=async()=>{
let search=document.querySelector("#search").value;
let url=`https://www.omdbapi.com/?apikey=93992e1b&s=${search}`;
let res= await fetch(url);
let data=await res.json();
console.log(data.Search)
append(data.Search)
}
let append=(data)=>{
    let container=document.querySelector("#movies")
    container.innerHTML="";
    data.forEach((elem)=>{
        let image=document.createElement("img")
        image.src=elem.Poster;
        image.setAttribute("class","img_tab")

        let Name=document.createElement("h2")
        Name.innerText=elem.Title;
        Name.setAttribute("class","name_tab")

        let btn=document.createElement("button")
        btn.innerText="Book";
        btn.setAttribute("class","btn_tab")
        btn.onclick=()=>{
            goToDetaisls(elem)
        }

        let div=document.createElement("div")
        div.setAttribute("class","movie_tab")

        div.append(image,Name,btn)
        container.append(div)
    })
}

let goToDetaisls=(data)=>{
localStorage.setItem("movie",JSON.stringify(data))
window.location.href="checkout.html";
}

let id;
function debaunce(func,delay){
    if(id)
    {
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay);
}
// Poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
// Title: "Thor"
// Type: "movie"
// Year: "2011"
// imdbID: "tt0800369"