/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let arr=JSON.parse(localStorage.getItem("user")) ||[];
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
         user_pic:document.querySelector("#user_pic").value,
         user_name:document.querySelector("#user_name").value,
         user_email:document.querySelector("#user_email").value,
         user_country:document.querySelector("#user_country").value,
    }
    if(checkemails(obj.user_email==true))
    {
        arr.push(obj)
        localStorage.setItem("user",JSON.stringify(arr))
    }
    else{
        alert("Account already exist!!")
    }
    window.location.href="worldNews.html";
    document.querySelector("form").reset();
})
function checkemails(user_email)
{
    let filter=arr.filter(function (elem){
        return user_email===elem.user_email;
    })
    if(filter.length>0)
    {
        return false;
    }
    else{
        return true;
    }
}