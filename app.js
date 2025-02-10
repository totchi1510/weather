const apiKey = 'a956f9d90db544ee82a154018251002';  // ここにWeatherAPIのAPIキーを入力
const city = 'Okayama';  // 取得したい都市名

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();
        document.getElementById('weather').innerText = 
            `${data.location.name}: ${data.current.condition.text}, ${data.current.temp_c}°C`;
    } catch (error) {
        document.getElementById('weather').innerText = 'Failed to load weather data';
    }
}

fetchWeather();
