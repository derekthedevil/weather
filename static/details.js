function myFunction() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6`)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
let lon;
let lat;
let x = window.location.href
let y = x.split("/").reverse()
lon = y[1]
lat = y[2]
myFunction()