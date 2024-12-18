import { useEffect, useState } from "react";
import MyContext from "./context";

const ContextProvider = ({ children }) => {
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);

  // comments

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);


  // postdetails 

  return (
    <MyContext.Provider value={{ postId, setPostId, comments }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
