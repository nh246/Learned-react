import { useEffect, useState } from "react";
import Post from "../Post/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const basUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(basUrl)
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
