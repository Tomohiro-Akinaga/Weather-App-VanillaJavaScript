"use strict";

// When clicked form
export function submitForm() {
    // const cityName = input.value;
    
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        const cityName = input.value;
        if ( cityName.length === 0 ) {
            event.preventDefault();
            alert("Use country name or state name");
        } else {
            event.preventDefault();
            callCurrentWeather(cityName);
        }
    });
};

// Call the current weather API
function callCurrentWeather(text) {
    const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + text +"&appid=7d20d69e5d5abc8385c9ae6416019816";
    async function currentWeatherApi() {
        const currentWeatherData = await fetch(currentWeatherUrl).then(res => res.json());
        console.log(currentWeatherData);
    };
    currentWeatherApi();
};


