import React, { useState } from 'react'
import axios from 'axios'
import "./Weather.css"

const Weather = () => {
  const [city, setCity] = useState("")
  // const [data,setData] = useState("")
  const getData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67449485f3fad6eb577e6d1ddae5e80a`)
    .then((response)=>{
      console.log(response.data);
    })
  }
  return (
    <>
      <div className='weather_area '>
        <h1 className='text-center text-white'>WEATHER APP</h1>
        <div className='input_area'>
          <input type="text" className='from-control' value={city} onChange={(event) => {
            setCity(event.target.value)
          }} ></input>
          <button type="submit" className="get_btn" onClick={getData}>Get temp</button>
        </div>
        <div className='location_area'>
          <h1>Kolkata</h1>
        </div>
        <div>
          <h3>5.25 deg C</h3>
          <h4>Min : 5.25 cel | Max 5.25 cel</h4>
        </div>
      </div>

    </>
  )
}

export default Weather
