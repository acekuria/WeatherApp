async function getWeather(location) {
  try {
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
    console.log(error);
  }
}
getWeather('Kenya');

const getBackground = (weather) =>
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=eAYDWf9yrjuEV6rdxTYB6fR6v0AArbzg&s=${weather}`,
    { mode: 'cors' },
  );

getBackground('rain')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
