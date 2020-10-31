import React from "react"
import FormattedDate from "./FormattedDate"

export default function WeatherData(props){

    return(
    <div className="WeatherInfo">
    <div className="row">
                <div className="col-5">               
                <h1>{props.data.city}</h1>
            <div><FormattedDate date={props.data.date} /> </div>
            </div>
            <div className="col-4">
<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rainy" />
    <div className="text-capitalize"> {props.data.description}
        </div> 
        </div>
        <div className="col-3">
            <span className="temperature">{Math.round(props.data.temp)}</span>
            <span className="celsius">°C</span>
        <div className="realfeel">Real feel:{Math.round(props.data.feeling)}°C</div>
        <div className="humidity">Humidity:{props.data.humidity}%</div>
           </div> </div> </div>
           )
}