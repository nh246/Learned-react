import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {

  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log(data))

  },[])


  return (
    <>
    <Header></Header>
    </>
  );
}

export default App;
