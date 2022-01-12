/* When click the hourly, daily, desc - Finish */
window.addEventListener("load", () => {
    const navItemHoulyBar = document.getElementById("container--nav-item__hourly");
    const navItemDailyBar = document.getElementById("container--nav-item__daily");
    const navItemDescBar = document.getElementById("container--nav-item__desc");

    navItemHoulyBar.addEventListener("click", clickHourly);
    navItemDailyBar.addEventListener("click", clickDaily);
    navItemDescBar.addEventListener("click", clickDesc);

    hide();
});

function hide() {
    const navItemDaily = document.getElementById("container--box__daily");
    const navItemDesc = document.getElementById("container--box__desc");    
    
    navItemDaily.style.display = "none";
    navItemDesc.style.display = "none";
};

function clickHourly() {
    const navItemHourly = document.getElementById("container--box__hourly");
    const navItemDaily = document.getElementById("container--box__daily");
    const navItemDesc = document.getElementById("container--box__desc");

    navItemHourly.style.display = "flex";   
    navItemDaily.style.display = "none";
    navItemDesc.style.display = "none";

    const navItemHoulyBar = document.getElementById("container--nav-item__hourly");
    const navItemDailyBar = document.getElementById("container--nav-item__daily");
    const navItemDescBar = document.getElementById("container--nav-item__desc");

    navItemHoulyBar.classList.remove("inactive");
    navItemHoulyBar.classList.add("active");
    navItemDailyBar.classList.remove("active");
    navItemDailyBar.classList.add("inactive");
    navItemDescBar.classList.remove("active");
    navItemDescBar.classList.add("inactive");
};

function clickDaily() {
    const navItemHourly = document.getElementById("container--box__hourly");
    const navItemDaily = document.getElementById("container--box__daily");
    const navItemDesc = document.getElementById("container--box__desc");

    navItemHourly.style.display = "none";   
    navItemDaily.style.display = "flex";
    navItemDesc.style.display = "none";

    const navItemHoulyBar = document.getElementById("container--nav-item__hourly");
    const navItemDailyBar = document.getElementById("container--nav-item__daily");
    const navItemDescBar = document.getElementById("container--nav-item__desc");

    navItemHoulyBar.classList.remove("active");
    navItemHoulyBar.classList.add("inactive");
    navItemDailyBar.classList.remove("inactive");
    navItemDailyBar.classList.add("active");
    navItemDescBar.classList.remove("active");
    navItemDescBar.classList.add("inactive");
};

function clickDesc() {
    const navItemHourly = document.getElementById("container--box__hourly");
    const navItemDaily = document.getElementById("container--box__daily");
    const navItemDesc = document.getElementById("container--box__desc");

    navItemHourly.style.display = "none";   
    navItemDaily.style.display = "none";
    navItemDesc.style.display = "flex";

    const navItemHoulyBar = document.getElementById("container--nav-item__hourly");
    const navItemDailyBar = document.getElementById("container--nav-item__daily");
    const navItemDescBar = document.getElementById("container--nav-item__desc");

    navItemHoulyBar.classList.remove("active");
    navItemHoulyBar.classList.add("inactive");
    navItemDailyBar.classList.remove("active");
    navItemDailyBar.classList.add("inactive");
    navItemDescBar.classList.remove("inactive");
    navItemDescBar.classList.add("active");
};

