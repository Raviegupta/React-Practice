import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

    const fun = useCallback(() => {
        console.log('Ravi');
    }, counterTwo)

    // const fun = () => {
    //     console.log('Ravi');
    // }

  return (
    <div>
        <h1>UseCallbackHook in practice</h1>

        <Child counterTwo={counterTwo} fun={fun} />
        <button onClick={()=> setCounterOne(counterOne+1)}>CounterOne: {counterOne}</button>
    </div>
  )
}

export default Parent