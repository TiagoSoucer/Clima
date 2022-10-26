function getUserPosition(){
    let url;

    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=bc78bcfbb2a89663dbd9ee6678a16ec5`
        fetchApi(url);
    });
}

function fetchApi(url){
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url).then((data) => {
        return data.json();
    })
    .then((data) => {
        let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
        city.innerText = `Hoje a temperatura em ${data.name} é:`;
        temp.innerText = tempInCelsius;
    })
    .catch((err) => {
        city.innerText = `Impossivel acessar o OpenWeather. Verifiqye a sua conexão`;
        temp.innerText = `-`
    })
}

getUserPosition();