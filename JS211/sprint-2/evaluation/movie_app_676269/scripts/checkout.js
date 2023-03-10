// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wall=JSON.parse(localStorage.getItem("walletAmount"))
document.querySelector("#wallet").innerText=wall[0].wallet;


let bookingTicket=()=>{
let user_name=document.querySelector("#user_name").value;
let number_of_seats=document.querySelector("#number_of_seats").value;
let total=Number(number_of_seats)*100;
// console.log(total)
if(total > Number(wall[0].wallet))
{
    console.log("Yes")
    alert("Insufficient Balance!")
}
else
{
    alert("Booking successful!")
    let p=[];
    updateAmount=Number(wall[0].wallet)-total;
    // console.log(updateAmount)
    function updatewee(u)
    {
        this.wallet=u;
    }
    let x=new updatewee(updateAmount)
    p.push(x);
    console.log(p)
    localStorage.setItem("walletAmount",JSON.stringify(p))
    let catchWallet=JSON.parse(localStorage.getItem("walletAmount"))
    
    document.querySelector("#wallet").innerText=catchWallet[0].wallet;
}

}



let data=[];
let arr=JSON.parse(localStorage.getItem("movie"));
data.push(arr)
    let append=(data)=>{
        let container=document.querySelector("#movie")
        container.innerHTML="";
        data.forEach((elem)=>{
            let image=document.createElement("img")
            image.src=elem.Poster;
            image.setAttribute("class","img_tab")
    
            let Name=document.createElement("h2")
            Name.innerText=elem.Title;
            Name.setAttribute("class","name_tab")
    
            let div=document.createElement("div")
            div.setAttribute("class","movie_tab")

            div.append(Name,image);
            container.append(div);

        })
    }
    append(data)




