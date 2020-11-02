import React from "react"

export default function FormattedDate(props){
    let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getUTCDay()];

    let number = props.date.getUTCDate()

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
  let month = months[props.date.getUTCMonth()]

  let year = props.date.getUTCFullYear()

  let hours = props.date.getUTCHours()
  let minutes = props.date.getUTCMinutes()
  if (minutes < 10){
      minutes = `0${minutes}`
  }

    return (
        <div>
            {day}, {number} {month} {year} | {hours}:{minutes}
        </div>
    )
}