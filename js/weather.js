API_KEY = "977ff9c72a73417040b5cecdead4dec2";


function onGeoOk(position) {
    const lat = position.coords.latitude; //경도
    const lon = position.coords.longitude;//위도
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    //console.log(url);
    fetch(url).then(response => response.json())  // json 객체로 만들고
              .then((data) => {
                  const weather = document.querySelector("#weather span:first-child");
                  const city = document.querySelector("#weather span:last-child");
                  city.innerText = data.name;
                  weather.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
              });
}
function onGeoError() {
    alert("Can't find you. No Weather for yo.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);