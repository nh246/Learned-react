// Methode create presisted mutable value
import { useRef } from "react";

const MutableValue = () => {
    let number = useRef(0);

    const change = () => {
        number.current++;
        console.log(number.current);
    }

    return (
        <div>
            <h1>See the console</h1>
            
            <button onClick={change}>Click</button>
        </div>
    );
};

export default MutableValue;
