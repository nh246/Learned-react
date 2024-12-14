import { useEffect } from "react";
import { useParams } from "react-router";
import Comment from "../Comment/Comment";
function PostDetails({ id }) {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  // comment and post apis

  useEffect(() => {
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

    fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);

  useEffect(() => {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(postUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);

  return (
    <div>
      <h3>This is Post detail: {id}</h3>
      <p>User posted: {post.id}</p>
      <p>title: {post.title}</p>
      <p>post body: {post.body}</p>
      <p>Number of comments: {comments.length}</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default PostDetails;
