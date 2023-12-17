import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const [data, setData] = useState({});

    const getData = async() => {
        const response = await fetch('https://api.frankfurter.app/latest?amount=100&from=USD&to=INR');
        console.log(response)
        // const data = await response.json();
        // console.log(data);

        setData(await response.json());
    }
    
    useEffect(()=> {
        getData();
    }, [])


  return (
    <div>
        <h1>UseEffectAPI</h1>

        <h3>{data.amount}</h3>
        <h3>{data.base}</h3>
        <h3>{data.date}</h3>
        <h3>{data.rates.INR}</h3>

    </div>
  )
}

export default UseEffectAPI