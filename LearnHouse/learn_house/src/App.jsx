import "./App.css";
import Courses from "./Components/Courses/Courses";
import Nav from "./Components/Nav/Nav";
import data from "./Fakedata/product.json";
import Cart from "./Components/Cart/Cart";
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      if (Array.isArray(data)) {
        setCourses(data);
      } else {
        console.error("Data fetched is not an array:", data);
      }
    } catch (error) {
      console.error("Error setting courses state:", error);
    }
  }, []);


  // button 

  const [addprice , setAddPrice] = useState(0)
  const [addedCourse , setAddedCourse]=useState([])

  const handlePrice = (price)=>{
    setAddPrice((prevTotal) => prevTotal + price )
    setAddedCourse((prev)=>[...prev,addedCourse])
  }

  return (
    <div>
      <Nav />
      <div className="body flex  p-3 bg-sky-200 h-full ">
        <div className="flex flex-wrap w-[70%] border-r-2 border-black p-4 space-x-4  ">
          {courses.map((data) => (
            <Courses course={data} handlePrice={handlePrice}></Courses>
          ))}
        </div>
        {/* cart section */}
        <div className="w-[30%] p-4">
          <Cart  addprice={addprice} addedcourse={addedCourse.length} />
        </div>
      </div>
    </div>
  );
}

export default App;
