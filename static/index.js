console.log('hello');

key = '70d6a2e48ba55104a3a94cb2a5ba73a6'
geokey = '5470f03b429d4a6a9e6e1479dbccc9c3'


let lat;
let lon;
let x;
function latlon(result) {
    // console.log(result);
    lat = result['features'][0]['properties']['lat'];
    lon = result['features'][0]['properties']['lon'];
    document.getElementById('city').innerHTML = "@" + x
    getweather()
    fetchWeatherData()
}
function myFunction() {
    x = document.getElementById("myInput").value
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${x}&apiKey=5470f03b429d4a6a9e6e1479dbccc9c3`)
        .then(response => response.json())
        .then(result => latlon(result)
        )
        .catch(error => console.log('error', error));
}

function getweather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6&units=metric`)
        .then(response => response.json())
        .then(result => details(result))
        .catch(error => console.log('error', error));
}



let temp, feelslike, pressure, max, min, humidity, visiblity, wind_speed, weather
function details(result) {
    temp = result['main']['temp']
    feelslike = result['main']['feels_like']
    console.log(feelslike);
    pressure = result['main']['pressure']
    max = result['main']['temp_max']
    min = result['main']['temp_min']
    weather = result['weather'][0]['icon']
    desc = result['weather'][0]['main']
    console.log(weather);
    imgurl = `https://openweathermap.org/img/wn/${weather}@2x.png`
    document.getElementById("weathericon").src = imgurl
    document.getElementById('temp').innerHTML = temp + '&deg;C'
    document.getElementById('desc').innerHTML = desc
    document.getElementById('feels').innerHTML = feelslike
}



async function fetchWeatherData() {
    try {
        response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6&units=metric`);
        data = await response.json();
        populateDivs(data['list']);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function populateDivs(weatherList) {
    weatherList.forEach((weather, index) => {
        const div = document.getElementById(`day-${index}`);
        if (div) {
            temp = weather['main']['temp'];
            tempMin = weather['main']['temp_min'];
            tempMax = weather['main']['temp_max'];
            weatherDescription = weather['weather'][0]['description'];
            humidity = weather['main']['humidity'];
            div.innerHTML = `
                <h4 class="bg-warning p-2 m-3">Day ${index + 1}</h4>
                <p>temp = ${temp}&deg;C</p>
                <p>Min temp = ${tempMin} &deg;C</p>
                <p>Max temp = ${tempMax}&deg;C</p>
                <p>Weather = ${weatherDescription}</p>
                <p>Humidity = ${humidity}%</p>
            `;
        }
    });
}







// // text = document.getElementById('textinput').value
// // console.log(text)



// // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6`)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));