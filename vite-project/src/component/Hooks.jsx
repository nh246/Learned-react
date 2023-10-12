import { useRef } from "react";


const Hooks = () => {
    let myHeadLine=useRef();
    const change = ()=>{
        // myHeadLine.current.innerHTML= "<ul><li>A</li><li>B</li></ul>";
        myHeadLine.innerHTML="<ul><li>A</li><li>B</li></ul>"
    }

  
    
    return (
        <div>
            <h1>dom manupelation</h1>
            {/* <h1 ref={myHeadLine}></h1> */}
            <h1 ref={(h1)=>myHeadLine=h1}></h1>
            <button onClick={change}>DOM react</button>
        </div>
    );
};

export default Hooks;