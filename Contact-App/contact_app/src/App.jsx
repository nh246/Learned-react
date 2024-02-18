import './App.css';
import Navbar from './components/Navbar';
import { LuSearch } from 'react-icons/lu';
import { AiFillPlusCircle } from "react-icons/ai";

function App() {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className='flex'>
        <div className="flex relative items-center">
          <LuSearch className="text-white text-3xl flex p-1 absolute" />
          <input
            type="text"
            className="h-10 flex-grow pl-7 pr-1 rounded-lg bg-transparent border-white border-2 text-white text-1xl "
          />
        </div>
        <AiFillPlusCircle />
      </div>
      {/* search bar  */}
    </div>
  );
}

export default App;
