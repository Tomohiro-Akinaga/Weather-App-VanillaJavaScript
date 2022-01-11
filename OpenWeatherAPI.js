"use strict";

import { fetchBackgroundImage } from "./fetchBackgroundImage.js";

/* When clicked form */
export function submitForm() {
    const form = document.getElementById("form");
    form.addEventListener("submit", getFormResult);
};

/* After clicked form */
function getFormResult(event) {
    event.preventDefault();
    const cityName = input.value;
    if ( cityName.length === 0 ) {
        alert("Use country name or state name");
    } else {
        callCurrentWeather(cityName);
        fetchBackgroundImage(cityName);
    }
};

/* Call the current weather API */
async function callCurrentWeather(text) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`;
    const currentWeatherData = await fetch(currentWeatherUrl).then(res => res.json());
    applyCurrentWeahter(text, currentWeatherData);
};


function applyCurrentWeahter(cityText, jsonData) {
    /* Manipulate DOM */
    const containerCityName = document.getElementById("container--city-name");
    const containerImgToday = document.getElementById("container--img__today");
    const containerTemperatureToday = document.getElementById("container--temperature__today");
    const containerTemperatureMax = document.getElementById("container--temperature__max");
    const containerTemperatureMin = document.getElementById("container--temperature__min");

    /* Apply the current data to HTML */
    containerCityName.innerText= cityText;
    containerImgToday.src = "http://openweathermap.org/img/wn/" + jsonData.weather[0].icon + "@2x.png";
    containerTemperatureToday.innerText = Math.round(jsonData.main.temp) + "°";
    containerTemperatureMax.innerText = Math.round(jsonData.main.temp_max) + "°";
    containerTemperatureMin.innerText = Math.round(jsonData.main.temp_min) + "°";

    /* Fetch the lat and lon from json data for calling weather forecast below */
    const lat = jsonData.coord.lat;
    const lon = jsonData.coord.lon;

    /* Call the hourly forecast */
    callWeatherForecast(lat, lon);
};

/* Call the weather forecast API for hourly*/
async function callWeatherForecast(latitude, longitude) {
    const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816";
    const weatherForecastData = await fetch(weatherForecastUrl).then(res => res.json());
    applyWeatherForecast(weatherForecastData);
};

/* Apply the forecast data to HTML */
function applyWeatherForecast(jsonData) {
    console.log(jsonData);
};

/* Execute the function for Canada keyword as default*/
document.addEventListener("DOMContentLoaded", () => {
    callCurrentWeather("Canada");
});



