import React, { useRef } from 'react'

const UseRefUncontrolled = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        alert(`Input value: ${inputRef.current.value}`);
        console.log(inputRef.current)
        console.log(inputRef.current.value);
        console.log(inputRef.current.type);
        console.log(inputRef.current.placeholder);

        inputRef.current.style.backgroundColor = 'red';
    } 

  return (
    <div>
        <h1>Uncontrolled Component: using useRef</h1>

        <input type="text" ref={inputRef} name="" id="" placeholder='type here' />
        <button onClick={handleClick}>Get Value</button>
    </div>
  )
}

export default UseRefUncontrolled