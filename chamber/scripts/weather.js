/* ANÁPOLIS COORDINATES */
const myKey = "a4cc743512c1770a26e6b77c93da8cc2";
const myLat = -16.3267;
const myLong = -48.9528;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric&lang=en`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric&lang=en`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    document.querySelector('#current-temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector('#current-desc').textContent = data.weather[0].description;
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastEl = document.querySelector('#forecast');
    forecastEl.innerHTML = '';

    // The API returns one entry every 3 hours; grab the ~noon entry for the next 3 days
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    dailyData.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = days[date.getDay()];

        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `
            <p class="forecast-day">${dayName}</p>
            <p class="forecast-temp">${Math.round(day.main.temp)}°C</p>
            <p class="forecast-desc">${day.weather[0].description}</p>
        `;
        forecastEl.appendChild(card);
    });
}

getCurrentWeather();
getForecast();