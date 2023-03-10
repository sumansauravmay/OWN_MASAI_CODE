import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import { Button,useToast } from '@chakra-ui/react'
import axios from 'axios';

const Page = ({movie}) => {
    const router=useRouter();
    const toast = useToast()

const handlewishlist=(movie)=>{
    return axios.post(`http://localhost:8080/wishlist`,{
        ...movie
    },
    // alert(`Movie added Succesfully`)
    toast({
        title: 'Movie Added.',
        description: "Movie Added Successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    )
   
}



  return (
    <div>
<Head>
   <title>Create Next App</title>
        <meta name="description" content="Movie details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<h1>{router.query.id}</h1>
<img src={movie.Images[0]} alt={movie.Poster}  
           width={500}
        height={500}/>
<h1>{movie.Title}</h1>
<p>{movie.Year}</p>

<Button style={{marginLeft:"20px",background:"blue",color:"white"}}
 onClick={()=>handlewishlist(movie)}
>Add to Wishlist</Button>
    </div> 
  )
}

export async function getStaticPaths() {
    let response=await fetch(`http://localhost:8080/movie`)
    let data=await response.json();
    return {
      paths: data.map((movie)=>({
         params: {id:movie.id.toString()}
        }
      )) ,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {
    const {
        params:{id},
    }=context;
    let response=await fetch(`http://localhost:8080/movie/${id}`)
    let data=await response.json();
    return {
      // Passed to the page component as props
      props: {
        movie:data
       },
    }
  }

// export async function getServerSideProps(context) {
//     let response=await fetch(`http://localhost:8080/movie/${id}`)
//     let data=await response.json();
//     return {
//       props: {
//         movie:data
//       }, // will be passed to the page component as props
//     }
//   }


export default Page
