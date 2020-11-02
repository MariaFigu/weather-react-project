import React, {useState} from "react"
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemp from "./WeatherTemp"

import "./WeatherData.css"

export default function WeatherData(props){

   function showRealFeel() {
        if(props.controlUnit.unit === "celsius"){
            return Math.round(props.data.feeling);
        }else{
            return Math.round((props.data.feeling * 9)/5 + 32);
        }
   }
    
    return(
    <div className="WeatherInfo">
    <div className="row">
                <div className="CityDate col-6">               
                <h1>{props.data.city}</h1>
            <div><FormattedDate date={props.data.date} /> </div>
            </div>
            <div className="col-3 p-0 align-middle">
< WeatherIcon className="WeatherIcon" code= {props.data.icon}  alt= {props.data.description} />
    <div className="Feeling text-capitalize"> {props.data.description}
        </div> 
        </div>
        <div className="WeatherTemp col-3">
            < WeatherTemp controlUnit={props.controlUnit} celsius = {props.data.temp} />
                <div className="realfeel">Real feel: {showRealFeel()}°</div>
        
        <div className="humidity">Humidity: {props.data.humidity}%</div>
           </div> </div> </div>
           )
}