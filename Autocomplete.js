"use strict";

// Call API in https://countrystatecity.in/docs/api/all-countries/
const headers = new Headers();
headers.append("X-CSCAPI-KEY", "T2JNanhMaDNoRkp4eU5HbEZ4T2pVZHpQQktVZ0NHN216N2V5aHBWYQ==");

const requestOptions = {
    method: "Get",
    headers: headers,
    refirect: "follow"
};

const url = "https://api.countrystatecity.in/v1/countries";




async function fetchCities() {
    const request = await fetch(url, requestOptions);
    const json = request.json();
    json.


fetchCities();



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