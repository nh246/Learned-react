import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

    fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  useEffect(() => {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(postUrl)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h3>This is Post detail: {id}</h3>
      <p>User posted: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Post body: {post.body}</p>
      <p>Number of comments: {comments.length}</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default PostDetails;
