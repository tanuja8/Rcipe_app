import React, { useState } from 'react'
import axios from 'axios'
import "./Weather.css"

const Weather = () => {
  const [city, setCity] = useState("Kolkata")
  const [data, setData] = useState("");
  // const [data,setData] = useState("")
  const getData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67449485f3fad6eb577e6d1ddae5e80a`)
    .then((response)=>{
      console.log(response.data);
      setData(response.data);
    })
  }
  return (
    <>
      <div className='weather_area '>
        <h1 className='text-center '>WEATHER APP</h1>
        <div className='input_area'>
          <input type="text" className='from-control' value={city} onChange={(event) => {
            setCity(event.target.value);
          }} ></input>
          <button type="submit" className="get_btn" onClick={getData}>Get temp</button>
        </div>
        <div className='location_area'>
          <h2>{data.name}</h2>
        </div>
        <div>
          <h3>{data.main?.temp_max}</h3>
          <h4>{data.main?.temp_min}</h4>
        </div>
      </div>

    </>
  )
}

export default Weather
