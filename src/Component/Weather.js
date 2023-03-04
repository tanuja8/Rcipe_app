import React, { useState } from 'react'
import axios from 'axios'
import "./Weather.css"
// import img2 from "../Component/img/sky.jpg"

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
        <h1 className='text-center py-1 '>WEATHER APP</h1>
        <div className='input_area'>
          <input type="text" className='from-control' value={city} onChange={(event) => {
            setCity(event.target.value);
          }} ></input>
          <button type="submit" className="get_btn" onClick={getData}>Get temp</button>
        </div>
        <div className='location_area'>
          <h2>{data.name}</h2>
        </div>
        <div className='text-white text-center m-3 p-3 '>
          <h3>{data?.main?.temp &&((data?.main?.temp)-273.15).toFixed(2)+"°C"}</h3>
        </div>
        <div>
          <h3 className='text-white text-center'>{data && data.weather[0].main}</h3>
        </div>
      </div>

    </>
  )
}

export default Weather
