import React, {useState} from "react"
import axios from "axios"
import "./Weather.css"

export default function Weather(props){
    const [loaded, setLoaded] = useState (false)
    const [data, setData] = useState({})

    function getResponse (response){
        setData ({
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
            feeling: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt)
    
        })
        setLoaded (true)
    }

    if (loaded){
return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
            </div></div>
            </form>
            
            <div className="row">
                <div className="col-5">               
                <h1>Lisboa</h1>
            <div>Thu, 29 Oct 2020</div>
            </div>
            <div className="col-4">
<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rainy" />
    <div className="text-capitalize"> {data.description}
        </div> 
        </div>
        <div className="col-3">
            <span className="temperature">{Math.round(data.temp)}</span>
            <span className="celsius">°C</span>
        <div className="realfeel">Real feel:{Math.round(data.feeling)}°C</div>
        <div className="humidity">Humidity:{data.humidity}%</div>
           </div> </div>
</div>
        
    )
    } else {
        const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c1523e5633a5a3610a4671a851484050&units=metric`;
        axios.get(apiUrl).then(getResponse);

        return "Loading";}
    }


    
