import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)

    // const increment = () => {
    //   setCount((prevCount) => prevCount + 1);
    // };
    
  return (
    <div>
        <h1>useState Hook in practice: making counter</h1>
        <h1>{count}</h1>
        <button onClick= {()=> setCount(count + 1)}>Increment</button>
        <button onClick= {()=> setCount(0)}>Reset</button>
        <button onClick= {()=> setCount(count - 1)}>Decrement</button>

        {/* <button onClick={increment}>update</button> */}
    </div>
  )
}

export default UseStateHook