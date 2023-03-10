import "./styles.css";
import React from "react";


export default function App() {
  const [posts, setPosts] = React.useState([]);

  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

 

  return (
    <div className="App">
      <button onClick={handlePost}>Show Posts</button>
      {posts.map((item) => (
         <p key={item.id}>{item.title}</p>
        
      ))}
    </div>
  );
}
