"use strict";

import { displayDay } from "./displayTime.js";
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
    // const containerImgToday = document.getElementById("container--img__today");
    const containerTemperatureToday = document.getElementById("container--temperature__today");
    const containerTemperatureMax = document.getElementById("container--temperature__max");
    const containerTemperatureMin = document.getElementById("container--temperature__min");

    /* Apply the current data to HTML */
    containerCityName.innerText= cityText;
    // containerImgToday.src = "http://openweathermap.org/img/wn/" + jsonData.weather[0].icon + "@2x.png";
    containerTemperatureToday.innerText = Math.round(jsonData.main.temp) + "°";
    containerTemperatureMax.innerText = Math.round(jsonData.main.temp_max) + "°";
    containerTemperatureMin.innerText = Math.round(jsonData.main.temp_min) + "°";

    /* Fetch the lat and lon from json data for calling weather forecast below */
    const lat = jsonData.coord.lat;
    const lon = jsonData.coord.lon;

    /* Call the weather forecast for hourly, daily, description */
    callWeatherForecast(lat, lon);
};

/* Call the weather forecast API for hourly*/
async function callWeatherForecast(latitude, longitude) {

    const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816";
    const weatherForecastData = await fetch(weatherForecastUrl).then(res => res.json());
    applyWeatherForecastHourly(weatherForecastData);
    applyWeatherForecastDaily(weatherForecastData);
    applyWeatherForecastDesc(weatherForecastData);

};

/* Apply the forecast hourly data to HTML */
function applyWeatherForecastHourly(jsonDataHourly) {

    const imgHourlyPlus0 = document.getElementById("container--img__hourly__now");
    const imgHourlyPlus1 = document.getElementById("container--img__hourly__plus1");
    const imgHourlyPlus2 = document.getElementById("container--img__hourly__plus2");
    const imgHourlyPlus3 = document.getElementById("container--img__hourly__plus3");
    const imgHourlyPlus4 = document.getElementById("container--img__hourly__plus4");
    const imgHourlyPlus5 = document.getElementById("container--img__hourly__plus5");
    
    imgHourlyPlus0.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[0].weather[0].icon}@2x.png`;
    imgHourlyPlus1.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[1].weather[0].icon}@2x.png`;
    imgHourlyPlus2.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[2].weather[0].icon}@2x.png`;
    imgHourlyPlus3.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[3].weather[0].icon}@2x.png`;
    imgHourlyPlus4.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[4].weather[0].icon}@2x.png`;
    imgHourlyPlus5.src = `http://openweathermap.org/img/wn/${jsonDataHourly.hourly[5].weather[0].icon}@2x.png`;

    const temperatureHourly0 = document.getElementById("container--temperature__hourly__now");
    const temperatureHourly1 = document.getElementById("container--temperature__hourly__1");
    const temperatureHourly2 = document.getElementById("container--temperature__hourly__2");
    const temperatureHourly3 = document.getElementById("container--temperature__hourly__3");
    const temperatureHourly4 = document.getElementById("container--temperature__hourly__4");
    const temperatureHourly5 = document.getElementById("container--temperature__hourly__5");
    
    temperatureHourly0.innerText = Math.round(jsonDataHourly.hourly[0].temp) + "°";
    temperatureHourly1.innerText = Math.round(jsonDataHourly.hourly[1].temp) + "°";
    temperatureHourly2.innerText = Math.round(jsonDataHourly.hourly[2].temp) + "°";
    temperatureHourly3.innerText = Math.round(jsonDataHourly.hourly[3].temp) + "°";
    temperatureHourly4.innerText = Math.round(jsonDataHourly.hourly[4].temp) + "°";
    temperatureHourly5.innerText = Math.round(jsonDataHourly.hourly[5].temp) + "°";
    
};

/* Apply the forecast daily data to HTML */
function applyWeatherForecastDaily(jsonDataDaily) {

    displayDay();

    const imgDailyPlus1 = document.getElementById("container--img__daily__plus1");
    const imgDailyPlus2 = document.getElementById("container--img__daily__plus2");
    const imgDailyPlus3 = document.getElementById("container--img__daily__plus3");
    const imgDailyPlus4 = document.getElementById("container--img__daily__plus4");
    const imgDailyPlus5 = document.getElementById("container--img__daily__plus5");
    const imgDailyPlus6 = document.getElementById("container--img__daily__plus6");

    imgDailyPlus1.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[1].weather[0].icon}@2x.png`;
    imgDailyPlus2.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[2].weather[0].icon}@2x.png`;
    imgDailyPlus3.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[3].weather[0].icon}@2x.png`;
    imgDailyPlus4.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[4].weather[0].icon}@2x.png`;
    imgDailyPlus5.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[5].weather[0].icon}@2x.png`;
    imgDailyPlus6.src = `http://openweathermap.org/img/wn/${jsonDataDaily.daily[6].weather[0].icon}@2x.png`;
    
    const temperatureDaily1 = document.getElementById("container--temperature__daily__1");
    const temperatureDaily2 = document.getElementById("container--temperature__daily__2");
    const temperatureDaily3 = document.getElementById("container--temperature__daily__3");
    const temperatureDaily4 = document.getElementById("container--temperature__daily__4");
    const temperatureDaily5 = document.getElementById("container--temperature__daily__5");
    const temperatureDaily6 = document.getElementById("container--temperature__daily__6");
    
    temperatureDaily1.innerText = Math.round(jsonDataDaily.daily[1].temp.day) + "°";
    temperatureDaily2.innerText = Math.round(jsonDataDaily.daily[2].temp.day) + "°";
    temperatureDaily3.innerText = Math.round(jsonDataDaily.daily[3].temp.day) + "°";
    temperatureDaily4.innerText = Math.round(jsonDataDaily.daily[4].temp.day) + "°";
    temperatureDaily5.innerText = Math.round(jsonDataDaily.daily[5].temp.day) + "°";
    temperatureDaily6.innerText = Math.round(jsonDataDaily.daily[6].temp.day) + "°";
};

/* Apply the forecast description data to HTML */
function applyWeatherForecastDesc(jsonDataDesc) {
    
    const itemDescText1 = document.getElementById("container--item__desc__text__1");
    const itemDescText2 = document.getElementById("container--item__desc__text__2");
    const itemDescText3 = document.getElementById("container--item__desc__text__3");
    const itemDescText4 = document.getElementById("container--item__desc__text__4");
    const itemDescText5 = document.getElementById("container--item__desc__text__5");
    const itemDescText6 = document.getElementById("container--item__desc__text__6");
    
    const sunriseTimeUnix = jsonDataDesc.current.sunrise;
    const sunriseTime = new Date(sunriseTimeUnix * 1000);
    const sunriseHours = sunriseTime.getHours();
    const sunriseMinute = sunriseTime.getMinutes();
    
    if ( sunriseMinute < 9 ) {
        itemDescText1.innerText = sunriseHours < 12 ? `${sunriseHours}:${sunriseMinute}am` :  `${sunriseHours-12}:0${sunriseMinute}pm`;
    } else {
        itemDescText1.innerText = sunriseHours < 12 ? `${sunriseHours}:${sunriseMinute}am` :  `${sunriseHours-12}:${sunriseMinute}pm`;
    };

    const sunsetTimeUnix = jsonDataDesc.current.sunset;
    const sunsetTime = new Date(sunsetTimeUnix * 1000);
    const sunsetHours = sunsetTime.getHours();
    const sunsetMinute = sunsetTime.getMinutes();

    if ( sunsetMinute < 9 ) {
        itemDescText2.innerText = sunsetHours < 12 ? `${sunsetHours}:${sunsetMinute}am` :  `${sunsetHours-12}:0${sunsetMinute}pm`;
    } else {
        itemDescText2.innerText = sunsetHours < 12 ? `${sunsetHours}:${sunsetMinute}am` :  `${sunsetHours-12}:${sunsetMinute}pm`;
    };

    itemDescText3.innerText = jsonDataDesc.current.pressure + " hPa";
    itemDescText4.innerText = jsonDataDesc.current.humidity + "%";
    itemDescText5.innerText = jsonDataDesc.current.clouds + "%";
    itemDescText6.innerText = Math.round(jsonDataDesc.current.feels_like) + "°";

};

/* Execute the function for Canada keyword as default*/
document.addEventListener("DOMContentLoaded", () => {
    callCurrentWeather("British Columbia");
});



