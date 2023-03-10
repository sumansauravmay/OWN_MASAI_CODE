// write js code here corresponding to matches.html
var matchAddd=JSON.parse(localStorage.getItem("favourites"))
displaydata(matchAddd);

function displaydata(data){
  data.forEach(function(elem){
    
var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.innerText=elem.matchName;

var td2=document.createElement("td");
td2.innerText=elem.teamA;

var td3=document.createElement("td");
td3.innerText=elem.teamB;

var td4=document.createElement("td");
td4.innerText=elem.data;

var td5=document.createElement("td");
td5.innerText=elem.venue;

var td6=document.createElement("td");
td6.innerText="Delete";
td6.style.color="green";
td6.style.cursor="pointer";
td6.addEventListener("click",function(elem,index){
displaydata(elem,index);
})
tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr);
})
function displaydata(elem,index){
  matchAddd.splice(index,1)
  localStorage.setItem("favourites",JSON.stringify(matchAddd));
  window.location.reload();
}
}
