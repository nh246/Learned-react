// src/components/Home.jsx
import { useEffect, useState } from "react";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h3>This is home</h3>
      <p>{posts.length}</p>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Home;
