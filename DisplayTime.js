/* Display time - Finish */

export function displayTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const monthWord = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthWord[today.getMonth()];
    const date = today.getDate();
    const todayDate = document.getElementById("container--today-date");
    
    todayDate.innerText = `${month} ${date}, ${year}`;
    
    displayTime();
};

function displayTime() {
    const today = new Date();
    const time = today.getHours();

    const timePlus1 = document.getElementById("container--time__hourly__plus1");
    const timePlus2 = document.getElementById("container--time__hourly__plus2");
    const timePlus3 = document.getElementById("container--time__hourly__plus3");
    const timePlus4 = document.getElementById("container--time__hourly__plus4");
    const timePlus5 = document.getElementById("container--time__hourly__plus5"); 
    
    timePlus1.innerText = (time + 1) < 12 ? (time + 1) + "am" : (time + 1) -12 + "pm"; 
    timePlus2.innerText = (time + 2) < 12 ? (time + 2) + "am" : (time + 2) -12 + "pm"; 
    timePlus3.innerText = (time + 3) < 12 ? (time + 3) + "am" : (time + 3) -12 + "pm"; 
    timePlus4.innerText = (time + 4) < 12 ? (time + 4) + "am" : (time + 4) -12 + "pm"; 
    timePlus5.innerText = (time + 5) < 12 ? (time + 5) + "am" : (time + 5) -12 + "pm";   
};

export function displayDay() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const dayPlus1 = `${year}-${month}-${day+1}`;
    const dayPlus2 = `${year}-${month}-${day+2}`;
    const dayPlus3 = `${year}-${month}-${day+3}`;
    const dayPlus4 = `${year}-${month}-${day+4}`;
    const dayPlus5 = `${year}-${month}-${day+5}`;
    const dayPlus6 = `${year}-${month}-${day+6}`;
    
    const day1 = new Date(dayPlus1); 
    const day2 = new Date(dayPlus2); 
    const day3 = new Date(dayPlus3); 
    const day4 = new Date(dayPlus4); 
    const day5 = new Date(dayPlus5); 
    const day6 = new Date(dayPlus6); 

    const day1Index = day1.getDay();
    const day2Index = day2.getDay();
    const day3Index = day3.getDay();
    const day4Index = day4.getDay();
    const day5Index = day5.getDay();
    const day6Index = day6.getDay();

    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Tursday", "Friday", "Saturday"];

    const dayPlus1Text = document.getElementById("container--time__daily__plus1");
    const dayPlus2Text = document.getElementById("container--time__daily__plus2");
    const dayPlus3Text = document.getElementById("container--time__daily__plus3");
    const dayPlus4Text = document.getElementById("container--time__daily__plus4");
    const dayPlus5Text = document.getElementById("container--time__daily__plus5"); 
    const dayPlus6Text = document.getElementById("container--time__daily__plus6"); 
    dayPlus1Text.innerText = dayArray[day1Index];
    dayPlus2Text.innerText = dayArray[day2Index];
    dayPlus3Text.innerText = dayArray[day3Index];
    dayPlus4Text.innerText = dayArray[day4Index];
    dayPlus5Text.innerText = dayArray[day5Index];
    dayPlus6Text.innerText = dayArray[day6Index];
};
    

