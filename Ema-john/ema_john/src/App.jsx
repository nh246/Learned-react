import "./App.css";
import Header from "./Components/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/shop" ><Shop></Shop></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
