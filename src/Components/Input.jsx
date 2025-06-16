import React from 'react'
import Search_icon from '../assets/search.png'
const Input = ({city,setCity,fetching}) => {
  return (
    <div className='Search'>
      <input type="text" placeholder='enter city name' value={city}
      onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={fetching}><img src={Search_icon} /></button>
    </div>
  )
}

export default Input
