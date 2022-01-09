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

/* Call the current weather API */
function callCurrentWeather(text) {
    const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + text +"&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816";
    async function currentWeatherApi() {
        const currentWeatherData = await fetch(currentWeatherUrl).then(res => res.json());
        console.log(currentWeatherData);

        /* Manipulate DOM tree */
        const containerCityName = document.getElementById("container--city-name");
        const containerImgToday = document.getElementById("container--img__today");
        const containerTemperatureToday = document.getElementById("container--temperature__today");
        const containerTemperatureMax = document.getElementById("container--temperature__max");
        const containerTemperatureMin = document.getElementById("container--temperature__min");
        containerCityName.innerText = text;
        containerImgToday.src = "http://openweathermap.org/img/wn/" + currentWeatherData.weather[0].icon + "@2x.png";
        containerTemperatureToday.innerText = Math.round(currentWeatherData.main.temp) + "°";
        containerTemperatureMax.innerText = Math.round(currentWeatherData.main.temp_max) + "°";
        containerTemperatureMin.innerText = Math.round(currentWeatherData.main.temp_min) + "°";
    };
    currentWeatherApi();
};

callCurrentWeather("Canada");
