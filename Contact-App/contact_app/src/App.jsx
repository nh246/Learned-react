import './App.css';
import Navbar from './components/Navbar';
import { LuSearch } from "react-icons/lu";

function App() {
  return (
    <div className='max-w-[370px] mx-auto'> 
      <Navbar/>
      {/* search bar  */}
      <div className='flex'>
      <LuSearch className='text-white text-2xl ' />
        <input 
        type='text'
        className='h-10 flex-grow rounded-md bg-transparent border-white border-2 '
        />
      </div>
    </div>
  );
}

export default App;
