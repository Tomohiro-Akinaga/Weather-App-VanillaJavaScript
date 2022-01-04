"use strict";

import { finishLoading } from "./Loading.js";

// Example Usage of Country State City API in https://countrystatecity.in/docs/api/all-countries/
const headers = new Headers();
headers.append("X-CSCAPI-KEY", "T2JNanhMaDNoRkp4eU5HbEZ4T2pVZHpQQktVZ0NHN216N2V5aHBWYQ==");

const requestOptions = {
    method: "Get",
    headers: headers,
    refirect: "follow"
};

const countryURL = "https://api.countrystatecity.in/v1/countries";
const stateURL = "https://api.countrystatecity.in/v1/states";

// Call API
const countryAndCity = [];

async function callCountryAPI() {
    const countryData = await fetch(countryURL, requestOptions).then(res => res.json());
    for ( let i = 0; i < countryData.length; i++ ) {
        countryAndCity.push(countryData[i].name);
    }
};

async function callStateAPI() {
    const stateData = await fetch(stateURL, requestOptions).then(res => res.json());
    for ( let i = 0; i < stateData.length; i++ ) {
        countryAndCity.push(stateData[i].name);
    }
}

// Manipulate DOM and Execute async function synchronously
window.onload = function () {

    const input = document.getElementById("input");
    const datalist = document.getElementById("name-list");
    
    async function syncFunc() {
        await callCountryAPI();
        await callStateAPI();
        finishLoading();
        input.addEventListener("input", autocomplete);
    };

    syncFunc();

};

function autocomplete() {
    console.log(input);
}

// function countryData(jsonData) {

//     for ( let i = 0; i < jsonData.length; i++ ) {
//         array.push(jsonData[i].name)
//     }  

// };

// Fetch the state data
// fetch("https://api.countrystatecity.in/v1/states", requestOptions)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         return stateData(data);
//     })
//     .catch(error => {
//         return console.log(error);
//     });

// function stateData(jsonData) {

//     for ( let i = 0; i < jsonData.length; i++ ) {
//         array.push(jsonData[i].name)
//     } 
    
// };
// console.log(array);
// Autocomplete function from below
// window.onload = function () {
//     const input = document.getElementById("input");
//     input.addEventListener("input", autocomplete);
// };


// function autocomplete() {
    
//     const suggestArray = [];
//     const datalist = document.getElementById("name-list");
//     datalist.innerHTML = "";


//     array.forEach(element => {

//         // In case of not including space
//         if ( element.includes(' ') === false ) {
//             const str1 = element.charAt(0).toLowerCase() + element.slice(1);
//             if ( str1.startsWith(input.value) && input.value.length > 0 ) {
//                 console.log(element);
//             }
//         } else {
//             ;
//         }
        
//     });
   
// };