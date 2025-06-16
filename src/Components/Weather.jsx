import React from 'react'
const Weather = ({cityName,temp,image}) => {
  return (
    <div className='Weather'>
        <img src={image} />
        <p className='temp'>{temp}</p>
        <h2>{cityName}</h2>
    </div>
  )
}

export default Weather
