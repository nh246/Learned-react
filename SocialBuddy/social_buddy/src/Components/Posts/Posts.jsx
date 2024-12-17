import Button from "@mui/material/Button";
import { useContext } from "react";
import MyContext from "../../Context/context";
import { useNavigate } from "react-router-dom";
function Posts(props) {
  const { id, title, body } = props.post;
  const { setPostId } = useContext(MyContext);
  const Navigate = useNavigate();



  const handleComments = () => {
    setPostId(id);
    Navigate("/comment");
  };

  return (
    <div className="m-3 p-3 bg-gray-400 w-30 h-15 rounded-xl">
      <h1 className="text-2xl font-bold m-1 p-2">{id}</h1>
      <h2 className="text-xl font-semibold m-1 p-3">TITLE : {title.toUpperCase()}</h2>
      <p className="m-1 p-2">{body}</p>
      <Button
        variant="contained"
        color="success"
        sx={{
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
        }}
        onClick={handleComments}
      >
        Comments
      </Button>
    </div>
  );
}

export default Posts;
