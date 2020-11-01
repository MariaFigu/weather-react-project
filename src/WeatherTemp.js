import React from "react"

export default function WeatherTemp(props){

function showFahrenheit(event){
    event.preventDefault();
    props.controlUnit.setUnit("fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    props.controlUnit.setUnit("celsius");
}

if (props.controlUnit.unit === "celsius"){
    return(
        <div className = "WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="celsius">°C | <a href="/" onClick = {showFahrenheit} > °F</a> </span>
            </div>
    )
} else {
    let fahrenheit = (props.celsius * 9)/5 + 32;
    return(
        <div className = "WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="celsius"> <a href="/" onClick = {showCelsius} >°C </a>|  °F </span>
            </div>
    )}
}