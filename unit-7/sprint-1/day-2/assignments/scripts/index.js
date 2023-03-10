

const fetchdata=async(page=1)=>{
let url=`https://www.balldontlie.io/api/v1/players?per_page=10&page=${page}`;
let res=await fetch(url)
let data=await res.json();
console.log(data.data)
localStorage.setItem("alldata",JSON.stringify(data.data))
appenddata(data.data)
}
fetchdata()


const appenddata=(data)=>{
    let playerdata=document.querySelector("#playerdata");
    playerdata.innerHTML="";
    data.map((item)=>{
        
        let div=document.createElement("div")
        div.setAttribute("class","playerdatadiv")

        let img=document.createElement("img")
        img.src="data:image/jpeg;base64,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";
        img.style.width="200px";


        let name=document.createElement("p")
         name.innerText="Name:"+item.first_name+" "+item.last_name;
         name.setAttribute("class","playername")

        let position=document.createElement("p")
         position.innerText="Position: "+item.position;
         position.setAttribute("class","playerposition")
 
         let btn=document.createElement("button");
         btn.innerText="Team details";
         btn.setAttribute("class","playerdel");
         btn.addEventListener("click", ()=>{
            submitNamesBtn(item);
        });

         playerdata.append(div)
         div.append(img,name,position,btn)


    })
}

// modal/pop up

function submitNamesBtn(item){
    let arr=[];
    arr.push(item)
    localStorage.setItem("namesOfPlayer", JSON.stringify(arr))||[];
    modal.style.display = "block";
    let playerData = JSON.parse(localStorage.getItem("namesOfPlayer"))||[];
    ModalData(playerData)
}

const modal = document.getElementById("myModal");
const btn = document.querySelector(".playerdel");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
  const ModalData=(playerData)=>{
  
      let modal_container = document.getElementById("modal_container");
          modal_container.innerHTML=null
  
          playerData.map((item)=>{
            let div=document.createElement("div")

            let img=document.createElement("img")
            img.src="data:image/jpeg;base64,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"
          
           let name=document.createElement("p")
           name.innerText=`Name:${item.first_name},${item.last_name}`;
        
           let position=document.createElement("p")
         position.innerText=`Position:${item.position}`;
         position.setAttribute("class","playerposition")
 
         let btn=document.createElement("button");
         btn.innerText="Team details";
         btn.setAttribute("class","playerdel");
         
         let teamBox = document.createElement("div");
         teamBox.setAttribute("class", "modal_teamBox");

         modal_container.append(div)
         div.append(img,name,position)
          
        
        })
    }
   


// search
let getdatafromsearch=JSON.parse(localStorage.getItem("alldata")) ||[];
document.querySelector("#serchbtn").addEventListener("click",()=>{
    mainsearch()
})

function mainsearch(){
let x=document.querySelector("#search").value;
let filterdata=getdatafromsearch.filter((item)=>{
    return item.first_name==x || item.last_name==x;
})
appenddata(filterdata);
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


 

