import React from "react"
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemp from "./WeatherTemp"

export default function WeatherData(props){

    return(
    <div className="WeatherInfo">
    <div className="row">
                <div className="col-5">               
                <h1>{props.data.city}</h1>
            <div><FormattedDate date={props.data.date} /> </div>
            </div>
            <div className="col-4">
< WeatherIcon code= {props.data.icon} alt= {props.data.description} />
    <div className="text-capitalize"> {props.data.description}
        </div> 
        </div>
        <div className="col-3">
            < WeatherTemp celsius = {props.data.temp} />
        <div className="realfeel">Real feel:{Math.round(props.data.feeling)}°</div>
        <div className="humidity">Humidity:{props.data.humidity}%</div>
           </div> </div> </div>
           )
}