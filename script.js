document.getElementById('searchBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
  const city = document.getElementById('cityInput').value;
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=df34162f471c6550ccb2b2162042e60c`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => alert('City not found'));
}

function displayWeather(data) {
  document.getElementById('cityName').querySelector('span').textContent = data.name;
  document.getElementById('temperature').querySelector('span').textContent = data.main.temp;
  document.getElementById('description').querySelector('span').textContent = data.weather[0].description;
}
