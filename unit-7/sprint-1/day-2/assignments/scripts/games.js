const fetchdata=async(page=1)=>{
    let url=`https://www.balldontlie.io/api/v1/games?per_page=10&page=${page}`;
    let res=await fetch(url)
    let data=await res.json();
    localStorage.setItem("gamedata",JSON.stringify(data.data))
    console.log(data.data)
    appendgamedata(data.data)
    }
    fetchdata()


const appendgamedata=(data)=>{

    let playerdata=document.querySelector("#teamgames");
    playerdata.innerHTML=null;
    data.map((item)=>{
        
        div=document.createElement("div")
        div.setAttribute("class","playergamedatadiv")
        
        let divteamone=document.createElement("div")
        
        let versus=document.createElement("h1")
        versus.innerText="Vs";
        versus.style.marginTop="100px";

        let divteamtwo=document.createElement("div")

        let img1=document.createElement("img")
        img1.src="data:image/jpeg;base64,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";

        let img2=document.createElement("img")
        img2.src="data:image/jpeg;base64,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";

        let name1=document.createElement("p")
         name1.innerText=item.home_team.full_name;
         name1.style.marginLeft="50px";
        
        let name2=document.createElement("p")
        name2.innerText=item.visitor_team.full_name;



        let season1=document.createElement("p")
        season1.innerText=item.season;
        season1.style.marginLeft="50px";
        
        let season2=document.createElement("p")
        season2.innerText=item.season;

        let status1=document.createElement("p")
        status1.innerText=item.status;
        status1.style.marginLeft="50px";
       
        let status2=document.createElement("p")
        status2.innerText=item.status;

       let home_team_score=document.createElement("p")
       home_team_score.innerText=item.home_team_score;
       home_team_score.style.marginLeft="50px";

       let visitor_team_score=document.createElement("p")
       visitor_team_score.innerText=item.visitor_team_score;

       let division1=document.createElement("p")
       division1.innerText=item.home_team.division;
       division1.style.marginLeft="50px";
       
       let division2=document.createElement("p")
       division2.innerText=item.visitor_team.division;

       playerdata.append( div)
       div.append( divteamone, versus,divteamtwo)
       divteamone.append(img1,name1,season1,status1,home_team_score,division1)
       divteamtwo.append(img2,name2,season2,status2,visitor_team_score,division2)



    })

}

//filtering from years
let getdatafromgame=JSON.parse(localStorage.getItem("gamedata")) ||[];

document.querySelector("#serchbtn").addEventListener("click",()=>{
    mainsearchgame()
})

function mainsearchgame(){
let x=+document.querySelector("#start").value;
let y=+document.querySelector("#end").value;
console.log(x,y)
let filterdata=getdatafromgame.filter((item)=>{
    return item.season>=x && item.season>=y;
})
appendgamedata(filterdata);
}

// pagination

let prevbtn=document.querySelector("#prev").addEventListener("click",()=>{
    prevfunc()
})
const prevfunc=()=>{
    let pagenum=document.querySelector("#page");
    if(Number(pagenum.value)>1)
    {
        let page=Number(pagenum.innerText);
        pagenum.innerText=page-1;
        pagenum.value=page-1;
        fetchdata(page-1)
    }
}

let nextbtn=document.querySelector("#next").addEventListener("click",()=>{
    nextfunc()
})

const nextfunc=()=>{
    let pagenum=document.querySelector("#page");
        let page=Number(pagenum.innerText);
        console.log(page)
        pagenum.innerText=page+1;
        pagenum.value=page+1;
        fetchdata(page+1)
    
}




