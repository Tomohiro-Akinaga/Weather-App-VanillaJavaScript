// Click the search button
document.getElementById("button").addEventListener("click", fetchBackground);
document.getElementById("input").addEventListener("keydown", clickEnter);

function clickEnter(eventObject) {
    if (eventObject.key === "Enter") {
        fetchBackground();
    }
}


function fetchBackground() {
    const weather = document.getElementById("input").value;
    const APIURL = "https://api.unsplash.com/search/photos?query=" + weather +"&client_id=n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw"
    fetch(APIURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return displayBackground(data);
        })
        .catch(error => {
            return console.log("error");
        });
    
    document.body.innerHTML = 
    "<p>loading</p>";
    
    window.addEventListener('load', displayBackground);
    function displayBackground(weather) {
        const i = Math.floor(Math.random() * 10);
        const background = weather.results[i].links.download;
        document.body.style.backgroundImage = "url(" + background + ")"; 

    };
};
