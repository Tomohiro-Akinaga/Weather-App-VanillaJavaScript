"use strict";

import { fetchBackgroundImage } from "./fetchBackgroundImage.js";
// import { startLoading, finishLoading } from "./Loading.js";



/* When clicked form */
export function submitForm() {
    
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        const cityName = input.value;
        if ( cityName.length === 0 ) {
            event.preventDefault();
            alert("Use country name or state name");
        } else {
            event.preventDefault();
            // startLoading();
            callCurrentWeather(cityName);
            fetchBackgroundImage(cityName);
            // finishLoading();
        }
    });
};

// Call the current weather API
function callCurrentWeather(text) {
    const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + text +"&appid=7d20d69e5d5abc8385c9ae6416019816";
    async function currentWeatherApi() {
        const currentWeatherData = await fetch(currentWeatherUrl).then(res => res.json());
        
        /* Manipulate DOM tree */
        const containerCityName = document.getElementById("container--city-name");
        containerCityName.innerText = text;


    };
    currentWeatherApi();
};


