import React, { memo, useState } from 'react'

const Child = ({counterTwo, fun}) => {
    console.log('Child copmponet is rendered')
    

  return (
    <div>
        <h2>Child Component</h2>
    </div>
  )
}
// This memo will prevent it from unwanted rendering of Child  Component
export default memo(Child)