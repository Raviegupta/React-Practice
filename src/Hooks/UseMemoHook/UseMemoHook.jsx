import React, { useState } from 'react'

const UseMemoHook = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const isEven = ()=> {
        console.warn('isEven Function is called')
        let i = 0;
        while(i<1000000000) i++;

        return counter1%2 === 0
    }

  return (
    <div>
        <h1>UseMemoHook in practice</h1>

        <span>{isEven()? "Even": "Odd"}</span>
        <button onClick={()=> setCounter1(counter1+1)}>Counter1: {counter1}</button>
        <button onClick={()=> setCounter2(counter2+1)}>Counter2: {counter2}</button>
    </div>
  )
}

export default UseMemoHook