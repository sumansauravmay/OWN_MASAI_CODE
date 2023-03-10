import React, { useEffect } from "react";
// import axios from "axios";
import { getFeeds } from "../redux/feeds/feeds.actions";
import { useSelector,useDispatch } from "react-redux";

const Feeds = () => {
 

  const feeds=useSelector((store)=>store.postsManager.posts)

  const dispatch=useDispatch()
  
  useEffect(()=>{
    getFeeds(dispatch)
  
  },[])
  


  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
