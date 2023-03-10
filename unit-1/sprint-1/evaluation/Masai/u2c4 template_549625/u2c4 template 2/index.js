// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",addmatch);
var add=JSON.parse(localStorage.getItem("schedule"))||[];
function addmatch(){
  event.preventDefault();
  var objMat={
    matchName:masaiForm.matchNum.value,
teamA:masaiForm.teamA.value,
teamB:masaiForm.teamB.value,
data:masaiForm.date.value,
venue:masaiForm.venue.value
  };
  add.push(objMat);
  console.log(add);
  localStorage.setItem("schedule",JSON.stringify(add))
  // window.location.href="matches.html"
}