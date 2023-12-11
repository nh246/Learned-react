import { useState } from "react";


function Counter () {

    const [counter, setCounter] = useState(20);
    const addValue = () => {
      // console.log(counter, "value");
      if ( counter < 20){
        setCounter(counter +1 );
      }
   
    };
    const deletValue = () => {
      // console.log(counter, "value");
      if (counter > 0) {
        setCounter(counter - 1);
      }
  
    };
return (
<>
<h1>This is a counter = {counter} </h1>
      <br />
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={deletValue}>Delete {counter} </button>
</>
);
}

export default Counter;