import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHours(props){
    function showHours(){
let date = new Date(props.data.dt * 1000);
let hours = date.getHours();
return `${hours}:00`
    }

    function showTemp(){
        let temp = Math.round(props.data.main.temp);
        return `${temp}C`
    }
    
    return(
        <div className ="ForecastCanvas">
            {showHours()}
            <WeatherIcon code ={props.data.weather[0].icon} />
            {showTemp()} 
        </div>
    )
}