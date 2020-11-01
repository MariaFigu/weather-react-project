import React from "react";
import {OpenWeatherMapCodes, Moon, Sun, Cloud, CloudFogMoon, CloudSnowMoon, CloudSnowSun, CloudFogSun, CloudLightningMoon, CloudLightningSun, CloudDrizzleMoonAlt,  CloudDrizzleSunAlt, CloudRainMoonAlt, CloudRainSunAlt, CloudMoon,  } from 'react-animated-climacons';

import "./WeatherIcon.css"

export default function WeatherIcon(props){
    const Icon = OpenWeatherMapCodes.night[801];
    const codeMapping = {
        "01d": < Sun />,
        "01n": < Moon />,
        "02d": < Cloud />,
        "02n": < CloudMoon />,
        "03d": < Cloud  />,
        "03n": < Cloud  />,
        "04d": < Cloud />,
        "04n": < Cloud />,
        "09d": < CloudRainSunAlt />,
        "09n": < CloudRainMoonAlt />,
        "10d": < CloudDrizzleSunAlt />,
        "10n": < CloudDrizzleMoonAlt />,
        "11d": < CloudLightningSun />,
        "11n": < CloudLightningMoon />,
        "13d": < CloudSnowSun />,
        "13n": < CloudSnowMoon />,
        "50d": < CloudFogSun />,
        "50n": < CloudFogMoon />,
    }
    
    return  (
    <div className = "WeatherIcon"> 
      {codeMapping[props.code]} 
    </div>
  )
}