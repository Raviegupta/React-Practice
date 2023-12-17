import React, { useEffect, useState } from 'react'

const User = (props) => {
  
    useEffect(()=> {
        console.warn('useEffect3 is called')
    }, [props.count])


  return (
    <div>
      <h1>UseEffectHook in practice: with props</h1>
      <h1>count: {props.count},  data: {props.data}</h1>
    </div>
  )
}

export default User