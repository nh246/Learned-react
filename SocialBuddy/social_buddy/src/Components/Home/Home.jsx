import Nav from "../Nav/Nav";
import Posts from "../Posts/Posts";
import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Nav></Nav>
      <h1 className="text-3xl font-bold text-center m-3 p-3 bg-red-400 w-30 h-15 rounded-full">
        {" "}
        Total Posts : {posts.length}
      </h1>
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
        <Comment />
    </div>
  );
}

export default Home;
