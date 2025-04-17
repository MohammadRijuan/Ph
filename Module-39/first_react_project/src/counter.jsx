import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(0)

    const handleClick=()=>{
        setCount(5)
    }


    const counterstyle={
        border : "2px solid yellow"
    }
    return(
        <div style={counterstyle}>
            <h3>Count</h3>
            <button onClick={handleClick}>Add</button>
        </div>

    )
}