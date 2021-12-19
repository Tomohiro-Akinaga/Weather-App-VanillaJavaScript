// Click the search button
document.getElementById("button").addEventListener("click", searchWeatherCondition);

function searchWeatherCondition() {
    const weather = document.getElementById("input").value;
    const APIURL = "https://api.unsplash.com/search/photos?query=" + weather + "&client_id=n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw"
    fetch(APIURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return displayBackgounrd(data);
        })
        .catch(error => {
            return console.log("error");
        });
    
    function displayBackgounrd(weather) {
        const background = weather.results[0].links.download;
        // console.log(background);
        // alert(background);
        document.body.style.backgroundImage = "url(background)" ;      
    };
};


// document.body.style.backgroundImage = "url('https://unsplash.com/photos/1YHXFeOYpN0/download?ixid=MnwyNzQ3MTB8MHwxfHNlYXJjaHwxfHxyYWlufGVufDB8fHx8MTYzOTg5OTA4Mg')";      