import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHours(props){
    function showHours(){
let date = new Date(props.data.dt * 1000);
let hours = date.getHours();
return `${hours}:00`
    }

    function showTemp(){
        if(props.controlUnit.unit === "celsius"){
            return Math.round(props.data.main.temp);
        }else{
            return Math.round((props.data.main.temp * 9)/5 + 32);
        }
    }
    
    return(
        <div className ="ForecastWidget col">
            {showHours()}
            <WeatherIcon className="ForecastIcon" code ={props.data.weather[0].icon} />
            {showTemp()}° 
        </div>
    )
}