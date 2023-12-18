import React, { useReducer } from 'react'

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        case 'dec':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return state;
    }
}

const UseReducerExSwitch = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0} )

    const increment = () => {
        dispatch({
            type: 'inc'
        })
    };

    const decrement = () => {
        dispatch({
            type: 'dec'
        })
    };

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    };


  return (
    <div>
        <h1>UseReducer Hook in practice: reducer funct with switch case</h1>
        <h2>{state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}

export default UseReducerExSwitch