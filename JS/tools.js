let weather_box=document.querySelector('.weather');
weather_box.addEventListener('mouseover',()=>document.querySelector('div.weather_block').classList.remove('display_falsz'))
weather_box.addEventListener('mouseout',()=>document.querySelector('div.weather_block').classList.add('display_falsz'))
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ua&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
getWeather()