/* Display time - Finish */
export function displayTime() {
    const today = new Date();
    const year = today.getFullYear();
    const monthWord = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthWord[today.getMonth()];
    const date = today.getDate();
    const time = today.getHours();
    const todayDate = document.getElementById("container--today-date");
    todayDate.innerText = `${month} ${date}, ${year}`;

    const todayTimePlus1 = document.getElementById("container--time__hourly__plus1");
    const todayTimePlus2 = document.getElementById("container--time__hourly__plus2");
    const todayTimePlus3 = document.getElementById("container--time__hourly__plus3");
    const todayTimePlus4 = document.getElementById("container--time__hourly__plus4");
    const todayTimePlus5 = document.getElementById("container--time__hourly__plus5");
    todayTimePlus1.innerText = time + 1;
    todayTimePlus2.innerText = time + 2;
    todayTimePlus3.innerText = time + 3;
    todayTimePlus4.innerText = time + 4;
    todayTimePlus5.innerText = time + 5;
};