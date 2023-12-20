import React, {useContext} from 'react'
import { GlobalInfo } from '../../App'
import ContextAPIsuperchild from './ContextAPIsuperchild';


const ContextAPIchild = () => {

    const {color} = useContext(GlobalInfo);

  return (
    <div>
        <h1 style={{color:color}}>ContextAPI in practice</h1>
        
        <ContextAPIsuperchild />
    </div>
  )
}

export default ContextAPIchild