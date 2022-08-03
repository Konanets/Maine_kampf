
//dont work


async function getWeather(e) {
    if(e.key === "Enter"){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&lang=ua&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    console.log(res)
    const data = await res.json();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    console.log(data)
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    }
}

let input_city=document.querySelector('.city');
input_city.addEventListener('keypress',getWeather);