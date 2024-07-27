function myFunction() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6&units=metric`)
        .then(response => response.json())
        .then(result => details(result))
        .catch(error => console.log('error', error));
}
let lon;
let lat;
let x = window.location.href
let y = x.split("/").reverse()
lon = y[1]
lat = y[2]
myFunction()

let temp,feelslike,pressure,max,min,humidity,visiblity,wind_speed
function details(result) {
    temp = result['main']['temp']
    feelslike = result['main']['feels_like']
    pressure = result['main']['pressure']
    max = result['main']['temp_max']
    min = result['main']['temp_min']
    
}