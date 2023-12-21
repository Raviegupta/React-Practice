import React, { useState } from 'react'

const ReactForm1 = () => {

    const [name, setName] = useState(0);
    const [framework, setFramework ] = useState('');
    const [TnC, setTnC] = useState(false);

    const handleData=(event)=> {
        event.preventDefault();
        console.warn(name, framework, TnC);
    }

  return (
    <div>
        <h1>React Form in practice:</h1>

        <form action="" onSubmit={handleData}>
            <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> <br />
            
            <select name="" id="" onChange={(e)=>setFramework(e.target.value)}>
                <option value="Angular Js">Angular</option>
                <option value="React Js">React</option>
                <option value="Vue Js">Vue</option>
            </select> <br />

            <input type="checkbox" name="" id="" onChange={(e)=>setTnC(e.target.checked)} /><span>Agree with terms n conditions</span> <br />

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default ReactForm1