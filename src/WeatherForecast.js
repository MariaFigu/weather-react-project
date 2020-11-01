import React, {useState} from "react"
import WeatherIcon from "./WeatherIcon";

import axios from "axios"

export default function WeatherForecast(props){
const [loaded, setLoaded] = useState (false)
const [forecast,setForecast] = useState (null)

function handleResponse (response){
    setForecast (response.data);
    setLoaded (true);
}

if (loaded) {
    return (
        <div className="row">
            <div className ="col">
            {new Date(forecast.list[0].dt * 1000).getHours()}:00
            <WeatherIcon code ={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}C 
        </div> </div>
    )
} else {
let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=c1523e5633a5a3610a4671a851484050&units=metric`;
        axios.get(url).then(handleResponse);
        
    return null;
}}
