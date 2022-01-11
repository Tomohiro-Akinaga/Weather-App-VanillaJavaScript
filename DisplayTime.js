/* Display time - Finish */
export function displayTime() {
    const today = new Date();
    const year = today.getFullYear();
    const monthWord = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthWord[today.getMonth()];
    const date = today.getDate();
    const todayDate = document.getElementById("container--today-date");
    todayDate.innerText = `${month} ${date}, ${year}`;
    
    const time = today.getHours();

    const timePlus1 = document.getElementById("container--time__hourly__plus1");
    const timePlus2 = document.getElementById("container--time__hourly__plus2");
    const timePlus3 = document.getElementById("container--time__hourly__plus3");
    const timePlus4 = document.getElementById("container--time__hourly__plus4");
    const timePlus5 = document.getElementById("container--time__hourly__plus5"); 
    timePlus1.innerText = (time + 1) < 12 ? time + "am" : (time + 1) -12 + "pm"; 
    timePlus2.innerText = (time + 2) < 12 ? time + "am" : (time + 2) -12 + "pm"; 
    timePlus3.innerText = (time + 3) < 12 ? time + "am" : (time + 3) -12 + "pm"; 
    timePlus4.innerText = (time + 4) < 12 ? time + "am" : (time + 4) -12 + "pm"; 
    timePlus5.innerText = (time + 5) < 12 ? time + "am" : (time + 5) -12 + "pm";   
};