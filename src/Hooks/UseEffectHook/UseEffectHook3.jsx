import React, { useEffect, useState } from 'react'
import User from './User'

const UseEffectHook3 = () => {

  const [count, setCount] = useState(10)
  const [data, setData] = useState(20)

  return (
    <div>
      <User count ={count} data={data} />
      <button onClick={()=> setCount(count+1)}>update counter</button>
      <button onClick={()=> setData(data*5)}>update counter</button>
    </div>
  )
}

export default UseEffectHook3