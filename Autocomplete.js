// Usage of API in https://countrystatecity.in/docs/api/all-countries/
const headers = new Headers();
headers.append("X-CSCAPI-KEY", "T2JNanhMaDNoRkp4eU5HbEZ4T2pVZHpQQktVZ0NHN216N2V5aHBWYQ==");

const requestOptions = {
    method: "Get",
    headers: headers,
    refirect: "follow"
};

// Fetch the country data
const array = [];
const suggestArray = [];

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => {
        return response.json()
    })
    .then(data => {
        return countryData(data);
    })
    .catch(error => {
        return console.log(error);
    });

function countryData(jsonData) {

    for ( let i = 0; i < jsonData.length; i++ ) {
        array.push(jsonData[i].name)
    }  

};

// Fetch the state data
fetch("https://api.countrystatecity.in/v1/states", requestOptions)
    .then(response => {
        return response.json()
    })
    .then(data => {
        return stateData(data);
    })
    .catch(error => {
        return console.log(error);
    });

function stateData(jsonData) {

    for ( let i = 0; i < jsonData.length; i++ ) {
        array.push(jsonData[i].name)
    } 
    
};

// Autocomplete function from below
window.onload = function () {
    const input = document.getElementById("input");
    input.addEventListener("input", autocomplete);
};

function autocomplete() {

    const datalist = document.getElementById("name-list");
    datalist.innerHTML = "";

    suggestArray.length = 0;
    array.forEach(element => {
        if ( element.includes(' ') ) {
            const awesome = element.split(' ');
            
            for (let i = 0; i < awesome.length; i++ ) {
                awesome[i].charAt(0).toLowerCase();
                
            }  
            
        }
            
    });
};

    // for ( let i = 0; i < 9; i ++ ) {
    //     const datalist = document.getElementById("name-list");
    //     const option = document.createElement("option");
    //     option.value = suggestArray[i];
    //     datalist.appendChild(option);
    // }