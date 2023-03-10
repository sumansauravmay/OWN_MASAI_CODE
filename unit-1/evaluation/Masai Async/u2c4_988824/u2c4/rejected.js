// All the Code for the Rejected page goes here
let rejectDetails=JSON.parse(localStorage.getItem("detailsreject"));


document.querySelector("tbody").innerHTML="";

displayTable(rejectDetails)
function displayTable(rejectDetails){

    rejectDetails.forEach(function(elem){
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
td1.innerText=elem.studentName;

        let td2=document.createElement("td");
td2.innerText=elem.studentEmail;

        let td3=document.createElement("td");
td3.innerText=elem.studentCourse;

        let td4=document.createElement("td");
td4.innerText=elem.studentGender
        let td5=document.createElement("td");
td5.innerText=elem.studentPhone;

tr.append(td1,td2,td3,td4,td5);
document.querySelector("tbody").append(tr);
    })
}