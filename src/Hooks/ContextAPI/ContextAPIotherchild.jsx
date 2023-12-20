import React, { useContext } from 'react'
import { GlobalInfo } from '../../App'

const ContextAPIotherchild = () => {

    const {color} = useContext(GlobalInfo);

  return (
    <div>
        <h1 style={{color:color}}>ContextAPI in practice: Other Child Component</h1>
        
    </div>
  )
}

export default ContextAPIotherchild