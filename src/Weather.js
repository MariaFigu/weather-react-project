import React, {useState} from "react"
import WeatherData from "./WeatherData"
import WeatherForecast from "./WeatherForecast"
import axios from "axios"
import "./Weather.css"


export default function Weather(props){
    const [loaded, setLoaded] = useState (false)
    const [city, setCity] = useState (props.city)
    const [data, setData] = useState({})
   const [unit, setUnit] = useState ("celsius");
   const [day, setDay] = useState ("container");
   let controlUnit = {
       unit: unit,
       setUnit: setUnit
   }

    function getResponse (response){
        setData ({
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
            feeling: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            date: new Date ((response.data.dt + response.data.timezone) * 1000),
            city: response.data.name,
            icon: response.data.weather[0].icon, 
        })
        setLoaded (true)
    }

function search(){
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1523e5633a5a3610a4671a851484050&units=metric`;
        axios.get(apiUrl).then(getResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search ();
}

function handleCity(event){
    setCity(event.target.value)
}

function isDay() {
    if(data.date.getUTCHours() > 6 && data.date.getUTCHours() < 18){
        return "container day";
    }else{
        return "container night";
    }
}

    if (loaded){
return (
    
      <div className={isDay()}>
        <div className="Weather">
            <form onSubmit = {handleSubmit}>
                <div className="row mt-0">
                    <div className="col-6">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCity} name="city"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="🔎" className="btn btn-outline-light" />
            </div></div>
            </form>
            <WeatherData controlUnit={controlUnit} data={data}/>
            <WeatherForecast controlUnit={controlUnit} city={data.city} />
            
        </div>
        <footer>
          Open-source code on <a href="https://github.com/MariaFigu/weather-react-project">GitHub</a> and hosted at <a href="https://inspiring-bhabha-4e59c4.netlify.app/">Netlify</a>, by Maria Figueiredo
        </footer>
    </div>
        
    )
    } else {
        search();

        return "Loading";}
    }


    
