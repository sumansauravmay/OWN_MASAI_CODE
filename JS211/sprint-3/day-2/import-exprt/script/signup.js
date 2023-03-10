import navbar from "../component/navbar.js";
// console.log(navbar());

document.querySelector("#navbar").innerHTML=navbar();

let submit_btn=document.querySelector("#submit");
submit_btn.onclick=()=>{
    register(event);
};

let register=async(e)=>{
    e.preventDefault();
    let data={
        name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };
    console.log(data);

    let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/register",
    {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
    "Content-Type":"application/json",
    },

    }); //default nature of fetch(Get)
    let user_data = await res.json();
    console.log(user_data);  
// console.log(res);

if(user_data.error==false)
{
    alert("Signup successful !!")
}
else
{
    alert("Something went wrong!!")
}
};

// {error: false, token: 'eb0594d2b1f99fb0f8d80282b42c25b1'}

