import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Post(props) {
  const { id, title, body } = props.post;

  return (
    <div className="bg-emerald-100 m-2 p-4 rounded-md">
      <h1 className="m-2 p-2 rounded-md font-bold">Post: {id}</h1>
      <h1 className="bg-emerald-700 m-2 p-2 rounded-md font-bold">
        Title: {title}
      </h1>
      <p className="bg-emerald-500 m-2 p-2 rounded-md font-normal">{body}</p>
      <div className="flex justify-start m-2">
        <Link to={`post/${id}`}>
          <Button variant="contained" color="primary">
            Show Comments
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
