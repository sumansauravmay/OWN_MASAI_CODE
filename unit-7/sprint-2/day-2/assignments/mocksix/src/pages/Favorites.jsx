import React from 'react';
import { Input,Button } from '@chakra-ui/react'
const Favorites = () => {

    let data=JSON.parse(localStorage.getItem("fav"))||[];

const eremocvefunc=(i)=>{
    data.splice(i,1)
    localStorage.setItem("fav",JSON.stringify(data))
    window.location.reload();
}



  return (
    <div>
        <h1>favorites Page</h1>
        <Input id="searchd" type="search" placeholder='search data' />
        <Button>Search</Button>
        {
            data.map((item,i)=>(
                <div key={i+1} style={{border:"1px solid black",textAlign:"left",width:"50%",margin:"auto"}}>
                <h1>{item.name}</h1>
                <p>#{i+1}</p>
                <Button onClick={eremocvefunc}>Remove</Button>
                </div>
            ))
        }
    </div>
  )
}

export default Favorites