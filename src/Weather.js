import React, {useState} from "react"
import axios from "axios"
import "./Weather.css"
import WeatherData from "./WeatherData"

export default function Weather(props){
    const [loaded, setLoaded] = useState (false)
    const [city, setCity] = useState (props.city)
    const [data, setData] = useState({})

    function getResponse (response){
        setData ({
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
            feeling: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt),
            city: response.data.name,
    
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

    if (loaded){
return (
        <div className="Weather">
            <form onSubmit = {handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCity}/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
            </div></div>
            </form>
            <WeatherData data={data}/>
            
</div>
        
    )
    } else {
        search();

        return "Loading";}
    }


    
