const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=1e9053d43df96fe9224d54d5da7aa2aa';
const apiUnits = '&units=metric';
let city = 'London';
let url;

const getWeather = () => {
    city = (!input.value) ? 'London' : input.value;
    url = apiLink + city + apiKey + apiUnits;
    axios.get(url)
    .then(res => {
        const temp = res.data.main.temp;
        const humi = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather)
        cityName.textContent = input.value
        temperature.textContent = Math.floor(temp) + '°C';
        humidity.textContent = humi + '%';
        weather.textContent = status.main;
        warning.textContent = '';
        input.value = '';

        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute('src', "IMG/thunderstorm.png");
        } else if (status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', "IMG/drizzle.png");
        } else if (status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', "IMG/rain.png");
        } else if (status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', "IMG/ice.png");
        } else if (status.id >= 700 && status.id < 800) {
            photo.setAttribute('src', "IMG/fog.png");
        } else if (status.id === 800) {
            photo.setAttribute('src', "IMG/sun.png");
        } else if (status.id > 800 && status.id < 900) {
            photo.setAttribute('src', "IMG/cloud.png");
        } else {
            photo.setAttribute('src', 'IMG/unknown.png');
        }

    
    }).catch( () => {
        warning.textContent = 'Incorrect place name '
    })
};

const enterCheck = (e) => {
    if (e.keyCode === 13) {
        getWeather()
    }
};



getWeather();
btn.addEventListener('click', getWeather);
input.addEventListener('keyup', enterCheck);