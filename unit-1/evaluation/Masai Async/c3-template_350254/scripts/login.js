let arr=JSON.parse(localStorage.getItem("userData"))||[];
  document.querySelector("form").addEventListener("submit",function(event){
  event.preventDefault();

let obj={
  
  customerEmail:document.querySelector("#email").value,
  customerPassword:document.querySelector("#password").value,
}
if(checksignin(obj. customerEmail,obj.customerPassword)==false)
{
  alert("Wrong email or Password")
}
else
{
  localStorage.setItem("login",JSON.stringify(arr));
  alert("login successfully");
  window.location.href="index.html"
  
}
document.querySelector("form").reset();
  })
  function checksignin(customerEmail,customerPassword)
  {
    let filter=arr.filter(function(elem){
      return elem.customerEmail===customerEmail && elem.customerPassword===customerPassword;
    })
    if(filter.length>0)
    {
      return true;
    }
    else{
      return false;
    }
  }
