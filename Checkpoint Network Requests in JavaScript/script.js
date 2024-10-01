const apiKey = 'd0fe934f5136fc91cda77a55c3ba34c3';
const fetchButton = document.getElementById('fetch-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

fetchButton.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { main, weather, name } = data;
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}