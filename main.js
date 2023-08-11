/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const input = document.querySelector('input');
const submit = document.querySelector('[type="submit"]');
const gifContainer = document.querySelector('.gif-container');
const weatherInfo = document.querySelector('.weather-info');
const errorText = document.querySelector('.error');
const celciusButton = document.querySelector('.celcius');
const farenheitButton = document.querySelector('.farenheit');
const feelsLike = document.querySelector('.feels-like');
const degreesSymbol = document.querySelector('.degrees-symbol');
const degrees = document.querySelector('.degrees');
const searchContainer = document.querySelector('.search-container');

function displayError(error) {
  errorText.innerHTML = error;
}

function setVisibility() {
  weatherInfo.style.visibility = 'visible';
}

function lowerOpacity() {
  searchContainer.style.opacity = '0.5';
}

function displayGif(json) {
  gifContainer.style.backgroundImage = `url(${json.data.images.original.url})`;
  lowerOpacity();
  celciusButton.focus();
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
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');

  condition.textContent = data.current.condition.text;
  location.textContent = `${data.location.name}, ${data.location.country}`;
  // inital temp will be in celcius
  degreesSymbol.textContent = '°C';
  degrees.textContent = Math.floor(data.current.temp_c);

  feelsLike.textContent = `Feels Like:      ${data.current.feelslike_c} °C`;
  wind.textContent = `Wind:     ${data.current.wind_kph}kph`;
  humidity.textContent = `Humidity:    ${data.current.humidity}%`;
}

function displayFarenheit(data) {
  // change the feels like to data.current.feelslike_f and fahrenheit
  // change the degrees symbol to F
  // change the degrees to data.current.temp_f
  feelsLike.textContent = `Feels Like: ${data.current.feelslike_f} °F`;
  degreesSymbol.textContent = '°F';
  degrees.textContent = Math.floor(data.current.temp_f);
}

function displayCelcius(data) {
  // change the feels like to data.current.feelslike_c and celcius
  // change the degrees symbol to C
  feelsLike.textContent = `Feels Like: ${data.current.feelslike_c} °C`;
  degreesSymbol.textContent = '°C';
  degrees.textContent = Math.floor(data.current.temp_c);
}

function fetchData(e) {
  e.preventDefault();
  const inputValue = input.value;
  getWeather(inputValue)
    .then((data) => {
      celciusButton.addEventListener('click', () => {
        displayCelcius(data);
      });
      farenheitButton.addEventListener('click', () => {
        displayFarenheit(data);
      });
      input.addEventListener('focus', () => {
        searchContainer.style.opacity = '1';
      });
      displayWeather(data);
      getBackground(data.current.condition.text).then((response) => {
        response.json().then((json) => {
          console.log(json);
          displayGif(json);
          setVisibility();
        });
      });
    })
    .catch(() => {
      displayError('No matching location found');
    });
}

submit.addEventListener('click', fetchData);

window.addEventListener('load', () => {
  input.focus();
  weatherInfo.classList.add('invisible');
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsOEJBQThCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixTQUFTO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixRQUFRO0FBQ2xHLE1BQU0sY0FBYztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1CQUFtQixJQUFJLHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLDBCQUEwQjtBQUN4RSxrQ0FBa0Msc0JBQXNCO0FBQ3hELHlDQUF5QyxzQkFBc0I7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuY29uc3QgZ2lmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZi1jb250YWluZXInKTtcbmNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mbycpO1xuY29uc3QgZXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5jb25zdCBjZWxjaXVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGNpdXMnKTtcbmNvbnN0IGZhcmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXJlbmhlaXQnKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG5jb25zdCBkZWdyZWVzU3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZ3JlZXMtc3ltYm9sJyk7XG5jb25zdCBkZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZ3JlZXMnKTtcbmNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihlcnJvcikge1xuICBlcnJvclRleHQuaW5uZXJIVE1MID0gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIHNldFZpc2liaWxpdHkoKSB7XG4gIHdlYXRoZXJJbmZvLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59XG5cbmZ1bmN0aW9uIGxvd2VyT3BhY2l0eSgpIHtcbiAgc2VhcmNoQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMC41Jztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUdpZihqc29uKSB7XG4gIGdpZkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7anNvbi5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmx9KWA7XG4gIGxvd2VyT3BhY2l0eSgpO1xuICBjZWxjaXVzQnV0dG9uLmZvY3VzKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBlcnJvclRleHQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZjliYzU5MjgzYTdiNDc2OTllZTE1MDgyNDIzMDcwOCZxPSR7bG9jYXRpb259JmFxaT1ub1xuICAgICAgYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gYWRkIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIGRvbVxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuY29uc3QgZ2V0QmFja2dyb3VuZCA9ICh3ZWF0aGVyKSA9PlxuICBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9ZUFZRFdmOXlyanVFVjZyZHhUWUI2ZlI2djBBQXJiemcmcz0ke3dlYXRoZXJ9YCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24nKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG5cbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gIC8vIGluaXRhbCB0ZW1wIHdpbGwgYmUgaW4gY2VsY2l1c1xuICBkZWdyZWVzU3ltYm9sLnRleHRDb250ZW50ID0gJ8KwQyc7XG4gIGRlZ3JlZXMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKGRhdGEuY3VycmVudC50ZW1wX2MpO1xuXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAgICAgICR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgO1xuICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICAgICAke2RhdGEuY3VycmVudC53aW5kX2twaH1rcGhgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogICAgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGYXJlbmhlaXQoZGF0YSkge1xuICAvLyBjaGFuZ2UgdGhlIGZlZWxzIGxpa2UgdG8gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mIGFuZCBmYWhyZW5oZWl0XG4gIC8vIGNoYW5nZSB0aGUgZGVncmVlcyBzeW1ib2wgdG8gRlxuICAvLyBjaGFuZ2UgdGhlIGRlZ3JlZXMgdG8gZGF0YS5jdXJyZW50LnRlbXBfZlxuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Z9IMKwRmA7XG4gIGRlZ3JlZXNTeW1ib2wudGV4dENvbnRlbnQgPSAnwrBGJztcbiAgZGVncmVlcy50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IoZGF0YS5jdXJyZW50LnRlbXBfZik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDZWxjaXVzKGRhdGEpIHtcbiAgLy8gY2hhbmdlIHRoZSBmZWVscyBsaWtlIHRvIGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyBhbmQgY2VsY2l1c1xuICAvLyBjaGFuZ2UgdGhlIGRlZ3JlZXMgc3ltYm9sIHRvIENcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgO1xuICBkZWdyZWVzU3ltYm9sLnRleHRDb250ZW50ID0gJ8KwQyc7XG4gIGRlZ3JlZXMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKGRhdGEuY3VycmVudC50ZW1wX2MpO1xufVxuXG5mdW5jdGlvbiBmZXRjaERhdGEoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgZ2V0V2VhdGhlcihpbnB1dFZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjZWxjaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5Q2VsY2l1cyhkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgZmFyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5RmFyZW5oZWl0KGRhdGEpO1xuICAgICAgfSk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgc2VhcmNoQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9KTtcbiAgICAgIGRpc3BsYXlXZWF0aGVyKGRhdGEpO1xuICAgICAgZ2V0QmFja2dyb3VuZChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgZGlzcGxheUdpZihqc29uKTtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgZGlzcGxheUVycm9yKCdObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZCcpO1xuICAgIH0pO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaERhdGEpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==