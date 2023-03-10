import React, { useEffect, useState } from 'react'
import Project from './api/project';
import Link from "next/link";

const Page = ({users=[]}) => {
const [state,setState]=useState([])

const getData=async()=>{
  let x=await Project()
  setState(x)
 }


useEffect(()=>{
  getData()
})


console.log(state)

const resunefunc=()=>{
  window.location.href="https://drive.google.com/file/d/1d9v40G0kmg4YdU5Tk1duJJe1QE3ViFll/view?usp=sharing";
}

  return (
    <div>

    <div>
    {
        users.map((item)=>(
          <div key={item.id} style={{display:"flex",marginTop:"50px"}}>
          <div>
          <img style={{borderRadius:"200px"}} src={item.avatar_url} alt="avatar"/>
            <h1>{item.name}</h1>
            <p>HTML| CSS |JS | React| TypesScript| Next.js</p>
            <p>followers: {item.followers}</p>
            <p>following: {item.following}</p>
            <button onClick={resunefunc}>Resume</button>
            <button>Follow</button>
          </div>

          <div>
            <h1 style={{marginLeft:"200px"}}>Projects</h1>
           {
            state.map((itemone)=>(
              <div style={{marginLeft:"20px"}}>
              <Link href={itemone.html_url}>{itemone.name}</Link>
              <div style={{display:"flex",gap:"20px"}}>
              <img style={{height:"30px",width:"30px"}}
              src="https://st2.depositphotos.com/3554337/6639/i/600/depositphotos_66393283-stock-photo-star-isolated-on-white-background.jpg" alt="star"/>
              <p>{itemone.stargazers_count}</p>
              <img style={{height:"30px",width:"30px"}}
              src="https://www.shutterstock.com/image-vector/message-icon-mobile-phone-chat-260nw-1714039993.jpg" alt="star"/>
              <p>{itemone.forks_count}</p>
              </div>
             
              </div>
            ))
           }
          </div>
          
          </div>
        ))
      }
    </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  let res=await fetch(`http://localhost:8080/githubdel`)
  let data=await res.json()
  return {
    props: {
users:data
    }, // will be passed to the page component as props
  }
}



export default Page
