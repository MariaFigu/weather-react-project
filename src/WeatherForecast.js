import React, {useState} from "react"
import WeatherForecastHours from "./WeatherForecastHours"

import axios from "axios"
import "./WeatherForecast.css"


export default function WeatherForecast(props){
const [loaded, setLoaded] = useState (false)
const [forecast,setForecast] = useState (null)
const [timezone,setTimezone] = useState (null)

function handleResponse (response){
    setForecast (response.data);
    setTimezone(response.data.city.timezone)
    setLoaded (true);
}

if (loaded && props.city === forecast.city.name) {
    return (
        <div className="WeatherForecast row">
        < WeatherForecastHours controlUnit={props.controlUnit} data={forecast.list[0]} timezone={timezone} />
        < WeatherForecastHours controlUnit={props.controlUnit} data={forecast.list[1]} timezone={timezone} />
        < WeatherForecastHours controlUnit={props.controlUnit} data={forecast.list[2]} timezone={timezone} />
        < WeatherForecastHours controlUnit={props.controlUnit} data={forecast.list[3]} timezone={timezone} />
        < WeatherForecastHours controlUnit={props.controlUnit} data={forecast.list[4]} timezone={timezone} />
        </div>
    )
} else {
    let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=c1523e5633a5a3610a4671a851484050&units=metric`;
        axios.get(url).then(handleResponse);
        
    return null;
}}
