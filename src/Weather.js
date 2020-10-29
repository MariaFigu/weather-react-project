import React from "react"
import "./Weather.css"

export default function Weather(){
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
    <div> Rainy
        </div> 
        </div>
        <div className="col-3">
            <span className="temperature">25</span>
            <span className="celsius">°C</span>
        <div>Feels like</div>
           </div> </div>
</div>
        
    )
}