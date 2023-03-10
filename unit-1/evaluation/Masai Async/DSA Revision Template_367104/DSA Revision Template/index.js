document.querySelector("form").addEventListener("submit",myDSA)
var arr=JSON.parse(localStorage.getItem("queData"))||[];

function myDSA(){
    event.preventDefault();
    
    let obj={
        queTitle:document.querySelector("#title").value,
        queLink:document.querySelector("#link").value,
        QueDifficulty:document.querySelector("#difficulty").value,
    }
    arr.push(obj);
    display(arr)
    localStorage.setItem("queData",JSON.stringify(arr))
}
function display(arr)
{
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function(elem)
    {
       let tr= document.createElement("tr")

        let td1=document.createElement("td")
td1.innerText=elem.queTitle;
        let td2=document.createElement("td")
td2.innerText=elem.queLink;

        let td3=document.createElement("td")
        td3.innerText=elem.QueDifficulty;

        let td4=document.createElement("td")
if(td3.innerText=="Easy")
{
    td4.innerText="No"
}
else{
    td4.innerText="Yes"
}
        tr.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(tr);
    })
}
    
    
