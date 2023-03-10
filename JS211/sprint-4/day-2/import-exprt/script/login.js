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

    let user=data.username;
console.log(user)
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

    //    getProfile(user,user_data.token)
saveUser(user,user_data.token,10000);

       console.log(user_data)

       if(user_data.error==false)
       {
           alert("login successful !!");
           window.location.href="/admin.html";
       }
       else
       {
           alert("wrong password or username!!")
       }
}


// description: "1234"
// email: "sonu@gmail.com"
// mobile: "+917654839189"
// name: "sonu"
// token: "371ab955fdc11c44c980779c3135b155"
// username: "sonu"

// let getProfile=async(username,token)=>{
//     console.log(username)
//     let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
//         headers:{
//             Authorization: `Bearer ${token}`,
//         },
//     })
//     res=await res.json();
//     console.log(res);
// }


let saveUser=(user,token,time)=>{
    let user2={
        user,token,
    };
    localStorage.setItem("user_details",JSON.stringify(user2))
    setTimeout(() => {
        localStorage.setItem("user_details",JSON.stringify(null))

    }, time);
}