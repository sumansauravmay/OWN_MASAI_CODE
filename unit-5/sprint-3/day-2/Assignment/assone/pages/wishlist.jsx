import { Button,useToast } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';

const wishlist = ({movie}) => {
    const toast = useToast();



const handleRemoveMovie=(id)=>{
    return (
        axios.delete(`http://localhost:8080/wishlist/${id}`),
        toast({
            title: 'Movie Remove',
            description: "Movie Removed Successfully.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    )
    
}


  return (
    <div>
      <h1>{movie.length}</h1>
      {
        movie.map((addmovie)=>(
            <div key={addmovie.id}>
            <img src={addmovie.Images[0]} alt={addmovie.Poster}  
           width={500}
        height={500}/>
<h1>{addmovie.Title}</h1>
<p>{addmovie.Year}</p>
<p>{addmovie.Rated}</p>    
<Button style={{background:"blue",color:"white"}}
onClick={()=>handleRemoveMovie(addmovie.id,movie)}>Remove</Button>           
            </div>
        ))
      }
    </div>
  )
}

export async function getServerSideProps(context) {
    let response=await fetch(` http://localhost:8080/wishlist`)
    let data=await response.json();
    return {
      props: {
        movie:data
      }, // will be passed to the page component as props
    }
  }


export default wishlist

