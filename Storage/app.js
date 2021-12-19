function fetchWeather(city) {

fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816")
    .then(response => {
        return response.json();
    })
    .then(data => {
        return displayWeather(data);
    })
    .catch(error => {
        console.log("失敗しました");
    });
};

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = name;
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "℃";
    document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed " + speed + " km/h";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
}

function search() {
    fetchWeather(document.querySelector(".search-bar").value);
  };



document.querySelector(".search button").addEventListener("click", function () {
    search();
  });



document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
      }
});

fetchWeather("Vancouver");
