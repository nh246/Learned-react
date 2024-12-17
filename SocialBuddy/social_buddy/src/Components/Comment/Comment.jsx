import { useContext } from "react";
import MyContext from "../../Context/context";

function Comment() {
  const { postId,comments } = useContext(MyContext);

  return (
    <div>
      <h2 className="text-2xl font-bold" >Comments for Post ID: {postId}</h2>
      {
        comments.map((comment) => (
          <div key={comment.id} className="m-4 p-3 bg-red-200 rounded-xl" >
            <h1 className="text-xl font-bold" >Name: {comment.name}</h1>
            <p className="text-lg" >Comment: {comment.body}</p>
          </div>
        ))  
      }
    </div>
  );
}

export default Comment;
