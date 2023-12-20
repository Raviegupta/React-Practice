import React, { useContext } from 'react'
import { GlobalInfo } from '../../App'

const ContextAPIsuperchild = () => {

    const {color, getDate} = useContext(GlobalInfo);
    const date = '20 Dec 23';

  return (
    <div>
        <h1 style={{color:color}}>ContextAPI in practice: Super Child Component</h1>
        <button onClick={()=> getDate(date)}>click</button>
    </div>
  )
}

export default ContextAPIsuperchild