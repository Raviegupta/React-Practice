import React, { useEffect, useState } from 'react'

const UseEffectHook2 = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  useEffect(()=>{
    console.warn('useEffect2 is called')
  }, [count])

  useEffect(()=>{
    console.warn('useEffect2 is called for data')
  }, [data])

  return (
    <div>
      <h1>UseEffectHook in practice: useEffect with dependency</h1>
      <h1>count: {count},  data: {data}</h1>
      <button onClick={()=> setCount(count+1)}>update counter</button>
      <button onClick={()=> setData(data+1)}>update counter</button>
    </div>
  )
}

export default UseEffectHook2