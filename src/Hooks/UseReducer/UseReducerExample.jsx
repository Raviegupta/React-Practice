import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if(action.type === 'inc') {
        return {
            ...state,
            count: state.count+1
        }
    }

    if(action.type === 'dec') {
        return {
            ...state,
            count: state.count-1
        }
    }

    if(action.type === 'change') {
        return {
            ...state,
            color: !state.color
        }
    }

    return state;
}

const UseReducerExample = () => {
    // const [BasicState, function] = useState(initialState)
       const [state,      dispatch] = useReducer(reducer, {count: 0, color: true })

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

       const changeColor = () => {
        dispatch({
            type: 'change',
            payload: !state.color
        })
       };


  return (
    <div>
        <h1>UseReducer Hook in practice</h1>
        <h2>{state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div>
            <div 
                style={{
                    width: '50px', 
                    height: '50px', 
                    border: '1px solid #eee', 
                    margin: '10px auto',
                    background: state.color ? 'red' : 'green',
                    }}>      
            </div>
            <button onClick={changeColor}>change color</button>
        </div>
    </div>
  )
}

export default UseReducerExample