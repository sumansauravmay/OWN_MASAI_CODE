let arr=JSON.parse(localStorage.getItem("userData"))||[];
document.querySelector("form").addEventListener("submit",function(event){
  event.preventDefault();

let obj={
  customerName:document.querySelector("#name").value,
  customerEmail:document.querySelector("#email").value,
  customerPassword:document.querySelector("#password").value,
}
if(checkemail(obj.customerEmail===true))
{
  arr.push(obj);
  localStorage.setItem("userData",JSON.stringify(arr))
}
else{
  alert("Account already exist")
}
window.location.href="login.html";
document.querySelector("form").reset();
})

function checkemail(customerEmail){
  let filter=arr.filter(function(elem){
    return customerEmail==elem.customerEmail
  })
  if(filter.length>0)
  {
    return false;
  }
  else{
    return true;
  }
}