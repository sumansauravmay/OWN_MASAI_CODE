import navbar from "../component/navbar.js";
// console.log(navbar());

document.querySelector("#navbar").innerHTML=navbar();

let submit_btn=document.querySelector("#submit");
submit_btn.onclick=()=>{
    login()
}

let login=async()=>{

    let data=
    {
        username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    };
    let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",
    {
        method:"POST",
        body:JSON.stringify(data),
        // mode: "no-cors",
        headers:{
            "Content-Type": "application/json",
        },
    })

       var user_data=await res.json(); 

       console.log(user_data)

       if(user_data.error==false)
       {
           alert("login successful !!");
       }
       else
       {
           alert("wrong password or username!!")
       }
}
