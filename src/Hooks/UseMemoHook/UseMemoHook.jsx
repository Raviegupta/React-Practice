import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = useMemo(()=> {
        console.warn('isEven Function is called')
        let i = 0;
        while(i<1000000000) i++;

        return counterOne%2 === 0
    }, [counterOne])

    // const isEven = ()=> {
    //     console.warn('isEven Function is called')
    //     let i = 0;
    //     while(i<1000000000) i++;

    //     return counterOne%2 === 0
    // }

  return (
    <div>
        <h1>UseMemoHook in practice</h1>

        <span>{isEven? "Even": "Odd"}</span>
        <button onClick={()=> setCounterOne(counterOne+1)}>CounterOne: {counterOne}</button>
        <button onClick={()=> setCounterTwo(counterTwo+1)}>CounterTwo: {counterTwo}</button>
    </div>
  )
}

export default UseMemoHook