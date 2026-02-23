import React from "react";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = ()=> {
        while(i < 5) {
            setCount((prevState) => prevState + 1);
            i++;
        }
    }

    return(
        <div>
            <p>{count}</p>
            <button type="button" onClick={() => {setCount((prevState) => prevState + 1)}}>Increament 1</button> 

            <p><button type="button" onClick={addFive}>Increament 5</button></p>
        </div>
    )

}