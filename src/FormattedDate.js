import React from "react"

export default function FormattedDate(props){
    let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];

    let number = props.date.getDate()

    let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()]

  let year = props.date.getFullYear()

  let hours = props.date.getHours()
  let minutes = props.date.getMinutes()
  if (minutes < 10){
      minutes = `0${minutes}`
  }

    return (
        <div>
            {day}, {number} {month} {year} | {hours}:{minutes}
        </div>
    )
}