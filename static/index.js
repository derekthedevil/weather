console.log('hello');

key = '70d6a2e48ba55104a3a94cb2a5ba73a6'
geokey = '5470f03b429d4a6a9e6e1479dbccc9c3'


let lat;
let lon;
function latlon(result) {
    lat = result['features'][0]['properties']['lat'];
    lon = result['features'][0]['properties']['lon'];
    window.location.replace(`details/${lat}/${lon}`)
}
function myFunction(parameter) {
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${parameter}&apiKey=5470f03b429d4a6a9e6e1479dbccc9c3`)
        .then(response => response.json())
        .then(result => latlon(result)
        )
        .catch(error => console.log('error', error));
}






// // text = document.getElementById('textinput').value
// // console.log(text)



// // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70d6a2e48ba55104a3a94cb2a5ba73a6`)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));