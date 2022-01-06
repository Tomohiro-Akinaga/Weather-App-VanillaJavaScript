"use strict";

import { finishLoading } from "./Loading.js";
import { submitForm } from "./OpenWeatherAPI.js";

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

};

// Manipulate DOM and Execute async function synchronously
window.onload = function () {

    const input = document.getElementById("input");
    async function syncFunc() {
        await callCountryAPI();
        await callStateAPI();
        finishLoading();
        input.addEventListener("input", autocomplete);
        submitForm();
    };

    syncFunc();

};

// Autocomplete function
function autocomplete() {
    
    const datalist = document.getElementById("name-list");
    datalist.innerHTML = "";
    const suggestArray = [];
    const keyword = input.value;

    // In case that input keyword doesn't include space. E.g Mexico, Japan, Tokyo.
    if ( keyword.includes(" ") === false && keyword.length > 0 ) {
        const keywordNoSpace = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        
        countryAndCity.forEach(item => {
            if ( item.startsWith(keywordNoSpace) ) {
                suggestArray.push(item);
            }
        });

        for ( let i = 0; i < 9; i++ ) {
            const option = document.createElement("option");
            option.value = suggestArray[i];
            datalist.appendChild(option);
        }
    }

    // In case that input keyword does include space. E.g New Zealand, New York, Kanagawa Prefecture.
    if ( keyword.includes(" ") === true && keyword.length > 0 ) {
        const keywordRemoveSpace = keyword.split(" ").join("");
        
        countryAndCity.forEach(item => {
            if ( item.includes(" ") ) {
                const array = [];
                const countryAndCitySplit = item.split(" ");
                
                countryAndCitySplit.forEach(word => {
                    array.push(word.charAt(0).toLowerCase() + word.slice(1));
                });

                const countryCityRemoveSpace = array.join("");
                
                if ( countryCityRemoveSpace.startsWith(keywordRemoveSpace) ) {
                    suggestArray.push(item);
                }
                
            } else if ( item.includes(' ') === false ) {
                ;
            } else {
                ;
            }
        });
        
        for ( let i = 0; i < 9; i++ ) {
            const option = document.createElement("option");
            option.value = suggestArray[i];
            datalist.appendChild(option);
        }
        
    }
};