import "./App.css";
import { useState } from "react";
import {InputBox} from './Components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyinfo';


function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("use")
  const [to , setTo]= useState("bdt")
  const [convertedAmount, setConvertedAmount] = useState(0)
  



  return (
    <>
      <h1 
      className="text-3xl bg-orange-500"
      >This is just a h1</h1>
    </>
  );
}

export default App;
