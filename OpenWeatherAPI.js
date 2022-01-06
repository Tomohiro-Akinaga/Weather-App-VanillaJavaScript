"use strict";
import { finishLoading } from "./Loading.js";

// When clicked form
export function submitForm () {

    
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        if ( text.value.length === 0 ) {
            event.preventDefault();
            alert("Use country name or state name");
        } else {
            event.preventDefault();
            alert(cityName);
        }
    });

};
// Call the current weather API


// const currentWeatherUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=7d20d69e5d5abc8385c9ae6416019816";

// async function currentWeatherApi() {
//     const currentWeatherData = await fetch(currentWeatherUrl).then(res => res.json());
//     console.log(currentWeatherData);
// };