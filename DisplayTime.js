/* Display time */
export function displayTime() {
    const today = new Date();
    const year = today.getFullYear();
    const monthWord = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthWord[today.getMonth()];
    const date = today.getDate();
    const todayDate = document.getElementById("container--today-date");
    todayDate.innerText = month + " " + date + ", "+ year;
};