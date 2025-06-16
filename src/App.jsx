import React, { useEffect, useState } from 'react'
import Input from './Components/Input'
import './App.css'
import Image from './assets/rain.png'
import Image1 from './assets/clear.png'
import Image2 from './assets/clouds.png'
import Image3 from './assets/drizzle.png'
import Image4 from './assets/snow.png'
import Image5 from './assets/mist.png'
import Weather from './Components/Weather'
import Info from './Components/Info'


const App = () => {
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("22°c")
  const [image, setImage] = useState(Image)
  const [cityName, setCityName] = useState("New York")
  const [humidity, setHumidity] = useState("50%")
  const [wind, setWind] = useState("15Km/hr")
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=9b345ac3061cc8c45a7a08562baccb1b&q=";
  function find(icon) {
    if(icon=="clear"){
      setImage(Image1)
    }
    else if(icon=="Clouds"){
      setImage(Image2)
    }
    else if(icon=="Drizzle"){
      setImage(Image3)
    }
    else if(icon=="Mist"){
      setImage(Image5)
    }
    else if(icon=="Rain"){
    setImage(Image)
  }
  else if(icon=="Snow"){
    setImage(Image4)
  }
  }
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL + city)
      const data = await response.json()
      console.log(data)
      setCityName(data.name)
      setTemp(Math.round(data.main.temp) + "°c")
      setHumidity((data.main.humidity) + "%")
      setWind(data.wind.speed + "km/hr")
      find(data.weather[0].main);
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='App'>
      <Input city={city} setCity={setCity} fetching={fetchData} />
      <Weather cityName={cityName} temp={temp} image={image} />
      <Info wind={wind} humidity={humidity} />
    </div>
  )
}

export default App
