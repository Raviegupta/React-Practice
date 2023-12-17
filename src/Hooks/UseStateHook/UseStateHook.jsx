import React, { useState } from 'react'

const UseStateHook = () => {
    const [data, setData] = useState('Ravie')
    
  return (
    <div>
        <h1>useState Hook in practice</h1>
        <h2>{data}</h2>
        <button onClick= {()=> setData('Taher')}>change Data</button>
    </div>
  )
}

export default UseStateHook