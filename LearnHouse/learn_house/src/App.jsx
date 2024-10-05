import "./App.css";
import Courses from "./Components/Courses/Courses";
import Nav from "./Components/Nav/Nav";
import data from "./Fakedata/product.json";
import Cart from "./Components/Cart/Cart";
function App() {
  // data
  console.log(data);

  return (
    <div>
      <Nav></Nav>
      <div className="flex ">
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
