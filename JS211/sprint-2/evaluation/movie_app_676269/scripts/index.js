// Store the wallet amount to your local storage with key "amount"
let data=JSON.parse(localStorage.getItem("walletAmount"))||[];
function constrant(w){
    this.wallet=w;
}
let walletsection=()=>{

    let amount=document.querySelector("#amount").value;
let s1=new constrant(amount);
data.push(s1);
console.log(data)

   localStorage.setItem("walletAmount",JSON.stringify(data));

}
let wall=JSON.parse(localStorage.getItem("walletAmount"))
document.querySelector("#wallet").innerText=wall[0].wallet;
