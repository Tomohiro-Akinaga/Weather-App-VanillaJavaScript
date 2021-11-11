function fetchWeatherForecast() {
    fetch("api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7d20d69e5d5abc8385c9ae6416019816")
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayWeatherForecast(data);
        })
        .catch(error => {
            console.log("失敗しました");
        })
};