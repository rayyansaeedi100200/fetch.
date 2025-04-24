const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&appid=49ac86d3100d0277a3690fa0e846bd31&units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiURL + city);
    const data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.para').innerHTML = data.weather[0].main;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';
    if (data.weather[0].main == 'Clouds') {
        icon.src = 'clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        icon.src = 'clear.png'
    }
    else if (data.weather[0].main == 'Rain') {
        icon.src = 'rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        icon.src = 'drizzl.png'
    }
    else if (data.weather[0].main == 'Mist') {
        icon.src = 'mist.png'
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
