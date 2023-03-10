import React, { useEffect} from "react";
//  import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { getPosts } from "../redux/posts/posts.actions";


const Posts = () => {

const posts=useSelector((store)=>store.postsManager.posts)

const dispatch=useDispatch()

useEffect(()=>{
  // getPosts(dispatch)
dispatch(getPosts())
},[])



//   const [posts, setPosts] = useState([]);
 

//  useEffect(() => {
//   axios.get("http://localhost:8080/posts").then((d) => {
//     setPosts(d.data);
//   });
// }, []);

  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
