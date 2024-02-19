import './App.css';
import Navbar from './components/Navbar';
import { LuSearch } from 'react-icons/lu';
import { AiFillPlusCircle } from "react-icons/ai";

function App() {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className='flex'>
        <div className="flex flex-grow relative items-center">
          <LuSearch className="text-white text-3xl flex ml-1 absolute" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
        <AiFillPlusCircle className='text-5xl cursor-pointer text-white' />
      </div>
      {/* search bar  */}
    </div>
  );
}

export default App;
