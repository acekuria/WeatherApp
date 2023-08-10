const input = document.querySelector('input');
const submit = document.querySelector('[type="submit"]');
const gifContainer = document.querySelector('.gif-container');

const errorText = document.querySelector('.error');

function displayError(error) {
  errorText.innerHTML = error;
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

function fetchData(e) {
  e.preventDefault();
  const inputValue = input.value;
  getWeather(inputValue)
    .then((data) => {
      getBackground(data.current.condition.text).then((response) => {
        response.json().then((json) => {
          console.log(json);
          displayGif(json);
        });
      });
    })
    .catch((error) => {
      displayError('No matching location found');
    });
}

submit.addEventListener('click', fetchData);
