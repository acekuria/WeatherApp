const input = document.querySelector('input');
const submit = document.querySelector('[type="submit"]');
const gifContainer = document.querySelector('.gif-container');
const weatherInfo = document.querySelector('.weather-info');
const errorText = document.querySelector('.error');

function displayError(error) {
  errorText.innerHTML = error;
}

function setVisibility() {
  weatherInfo.style.visibility = 'visible';
}

function displayGif(json) {
  gifContainer.style.backgroundImage = `url(${json.data.images.original.url})`;
}

async function getWeather(location) {
  try {
    errorText.textContent = '';
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f9bc59283a7b47699ee150824230708&q=${location}&aqi=no
      `,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // add custom error message to dom
    console.log(error);
    throw error;
  }
}
const getBackground = (weather) =>
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=eAYDWf9yrjuEV6rdxTYB6fR6v0AArbzg&s=${weather}`,
    { mode: 'cors' },
  );

function displayWeather(data) {
  const condition = document.querySelector('.condition');
  const location = document.querySelector('.location');
  const degrees = document.querySelector('.degrees');
  const feelsLike = document.querySelector('.feels-like');
  const degreesSymbol = document.querySelector('.degrees-symbol');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');

  condition.textContent = data.current.condition.text;
  location.textContent = `${data.location.name}, ${data.location.country}`;
  degrees.textContent = Math.floor(data.current.temp_c);
  feelsLike.textContent = `Feels Like:      ${data.current.feelslike_c}`;
  wind.textContent = `Wind:     ${data.current.wind_kph}kph`;
  humidity.textContent = `Humidity:    ${data.current.humidity}%`;
}

function fetchData(e) {
  e.preventDefault();
  const inputValue = input.value;
  getWeather(inputValue)
    .then((data) => {
      displayWeather(data);
      getBackground(data.current.condition.text).then((response) => {
        response.json().then((json) => {
          console.log(json);
          displayGif(json);
          setVisibility();
        });
      });
    })
    .catch((error) => {
      displayError('No matching location found');
    });
}

submit.addEventListener('click', fetchData);

window.addEventListener('load', () => {
  input.focus();
  weatherInfo.classList.add('invisible');
});
