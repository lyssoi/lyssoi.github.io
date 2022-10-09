const API_KEY = "3a1897a5c77a6c0ea43e5451cc4f060f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const weather =document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:Last-child")
        city.innerText= data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp};
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);