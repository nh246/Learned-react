import { useState,useCallback, useRef } from "react"


function App() {

  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcarAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);




  const useCallback =(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
    


  }, [length,numberAllowed,charAllowed,setpassword]);
  

  return (
<div
className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
<h1
className="text-white text-center my-3"
>Password Generator</h1>

</div>
  )
}

export default App
