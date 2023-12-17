import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const [data, setData] = useState([]);

    const getData = async() => {
        // const response = await fetch('https://api.github.com/users');
        // const response = await fetch('https://api.frankfurter.app/latest?amount=100&from=USD&to=INR');
        const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=indore');
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

        {/* {
            data.map((item)=> {
                const {login, avatar_url, followers_url, following_url} = item;
                return (
                    <div>
                        <h4>{login}</h4>
                        <h4>{avatar_url}</h4>
                        <h4>{followers_url}</h4>
                        <h4>{following_url}</h4>
                        <hr />
                    </div>
                )
            })
        } */}

        {/* <h3>{data.amount}</h3>
        <h3>{data.base}</h3>
        <h3>{data.date}</h3>
        <h3>{data.rates?.INR}</h3> */}

        

        {data.results?.map((item)=> {
            const {id, name, latitude, longitude, elevation, timezone } = item;
            console.log(item)
            return(
                <div>
                    <h4>{id}</h4>
                    <h4>{name}</h4>
                    <h4>{latitude}</h4>
                    <h4>{longitude}</h4>
                    <h4>{elevation}</h4>
                    <h4>{timezone}</h4>
                    <hr />
                </div>
            )
        })}

        

    </div>
  )
}

export default UseEffectAPI