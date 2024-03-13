
"use strict";

const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error Fetching Data", error);
    }
};

const renderData = async () => {
    const url = "./data.json";
    const data = await getData(url);
    const secondSection = document.querySelector(".timeframes");
    const dataItems = data.map(item => ({
        title: item.title,
        currentWeekly: item.timeframes.weekly.current,
        lastWeekly: item.timeframes.weekly.previous,
        currentDaily : item.timeframes.daily.current,
        previousDaily : item.timeframes.daily.previous,
        currentMonthly : item.timeframes.monthly.current,
        previousMonthly :item.timeframes.monthly.previous,
    }));

    let html = "";
    dataItems.forEach((item, index) => {
        html += `
            <div class="bkg${index} bkg">
               <div class="timeframesWrap">
                    <div class="flex">
                        <h2>${item.title}</h2>
                        <a href=""><img class="hamburger" src="./images/icon-ellipsis.svg"/></a>
                    </div>
                    <div class="flex">
                        <h3>${item.currentWeekly}hrs</h3>
                        <p class="last">Last Week - ${item.lastWeekly}hrs</p>
                    </div>
               </div> 
            </div>
        `;
    });

    secondSection.innerHTML = html;
};

renderData()


