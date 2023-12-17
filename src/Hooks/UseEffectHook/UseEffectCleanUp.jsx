import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {

    const [width, setWidth] = useState(window.screen.width);

    const actualWidth = () => {
        console.log('add Event');
        setWidth(window.screen.width);
    }

    useEffect(() => {
        window.addEventListener('resize', actualWidth)

        return () => {
            console.log('remove Event');
            window.removeEventListener('resize', actualWidth)
        }
    })
    

  return (
    <div>
        <h1>UseEffectCleanUp</h1>
        <p>The Size Width of Window is: </p>
        <h3>{width} px</h3>
    </div>
  )
}

export default UseEffectCleanUp