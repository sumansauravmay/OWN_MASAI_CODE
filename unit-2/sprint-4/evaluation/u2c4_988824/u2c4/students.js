// All the Code for All Students Page Goes Here
let detailStudent=JSON.parse(localStorage.getItem("addmissiondata"));

let arrDetails=JSON.parse(localStorage.getItem("detailsaccept"))|| [];
let arr2Details=JSON.parse(localStorage.getItem("detailsaccept"))|| [];

function handleCourseSort(){
    let choiceselected=document.querySelector("#filter").value;
    filterlist=detailStudent.filter(function(elem){
        return elem.studentCourse==choiceselected;
    })
    displayTable(filterlist)
    }


displayTable(detailStudent)

function displayTable(detailStudent){
    detailStudent.forEach(function(elem){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
td1.innerText=elem.studentName;

        let td2=document.createElement("td");
td2.innerText=elem.studentEmail;

        let td3=document.createElement("td");
td3.innerText=elem.studentPhone;

        let td4=document.createElement("td");
td4.innerText=elem.studentGender;
        let td5=document.createElement("td");
td5.innerText=elem.studentCourse

        let td6=document.createElement("td");
td6.innerText="Accept";
td6.style.backgroundColor="green";
td6.style.color="white";
td6.style.cursor="pointer";
td6.addEventListener("click",function(){
    clickaccept(elem)
})

        let td7=document.createElement("td");
td7.innerText="Reject";
td7.style.backgroundColor="red";
td7.style.color="white";
td7.style.cursor="pointer";
td7.addEventListener("click",function(){
    clickreject(elem)
})

tr.append(td1,td2,td3,td4,td5,td6,td7)
document.querySelector("tbody").append(tr);
    })
}
// function handleCourseSort(){
//     let choiceselected=document.querySelector("#filter").value;
//     filterlist=detailStudent.filter(function(elem){
//         return elem.studentCourse==choiceselected;
//     })
//     displayTable(filterlist)
//     }
function clickaccept(elem){
    arrDetails.push(elem);
    localStorage.setItem("detailsaccept",JSON.stringify(arrDetails));
}
function clickreject(elem){
    arr2Details.push(elem);
    localStorage.setItem("detailsreject",JSON.stringify(arr2Details));
}