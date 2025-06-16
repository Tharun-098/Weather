import React from 'react'
import Humidity from '../assets/humidity.png'
import Wind from '../assets/wind.png'
const Info = ({wind,humidity}) => {
  return (
    <div className='info'>
        <div className="humidity">
            <img src={Humidity}/>
            <div>
                <h2>{humidity}</h2>
                <p>Humidity</p>
            </div>
        </div>
        <div className="wind">
            <img src={Wind} />
            <div>
                <h2>{wind}</h2>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>
  )
}

export default Info
