import React, { useEffect, useState } from "react";

const UseEffectWeatherAPI = () => {
    
    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);

    const [inputCity, setInputCity] = useState("");

    const getData = async () => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
        console.log(response)
        const result = await response.json();

        setData(result);
    };

    const handleCityChange = () => {
        setCityName(inputCity);
    };

    useEffect(() => {
        getData();
    }, [cityName]);


  return (
    <div>
        <h1>UseEffect Weather API</h1>

        <input type="text" value={inputCity} onChange={(e) => setInputCity(e.target.value)} placeholder="bokaro"/>
        <button onClick={handleCityChange}>Change City</button>

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
  );
};

export default UseEffectWeatherAPI;