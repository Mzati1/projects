const apiKey = "a5dfbe4dacdd4f886b809297dd7f33ec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=en";
const searchBox = document.querySelector(".form-control");
const searchBtn = document.getElementById("button-addon2");
let dynamicIcon = document.getElementById("main-dynamic-icon");


//function to get json object that has weather information
async function checkWeather(city) {
    const responce = await fetch(apiUrl +`&q=${city}` + `&appid=${apiKey}`);
        //check if theres an error
    if (responce.status === 404) {
        document.getElementById("container-fluid").style.display = "none";
        document.getElementById("mid-module").style.display = "none";
        document.getElementById("alert").style.display = "block";
        document.getElementById("alert").innerHTML = "Invalid City Name";
    }else{
        var data = await responce.json();

        document.getElementById("container-fluid").style.display = "block";
        document.getElementById("mid-module").style.display = "block";
        document.getElementById("alert").style.display = "none";

    console.log(data);

    //change elements(linear order)
    document.getElementById("display").innerHTML = `${Math.round(data.main.temp)} &#8451`;
    document.getElementById("weather-status").innerHTML = data.weather[0].description;
    document.getElementById("city-name-sub").innerHTML = data.name;
    document.getElementById("feels-like").innerHTML = `Feels like ${Math.round(data.main.feels_like)} &#8451`;
    document.getElementById("wind-speed").innerHTML = `${data.wind.speed} <br> Km/h`;
    document.getElementById("humidity-percentage").innerHTML = `${data.main.humidity}`;

    //check weather status to change the main icon
    if (data.weather[0].main = "clear sky") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/clear-day.svg";
    } else if (data.weather[0].main == "few clouds") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/cloudy.svg";
    } else if (data.weather[0].main == "scattered clouds") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/overcast.svg";
    } else if (data.weather[0].main = "broken clouds") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/overcast-day.svg";
    } else if (data.weather[0].main = "shower rain") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/drizzle.svg";
    } else if (data.weather[0].main == "rain") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/rain.svg";
    } else if (data.weather[0].main == "thunderstorm") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/thunderstorms.svg";
    } else if (data.weather[0].main == "snow") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/snow.svg";
    } else if (data.weather[0].main == "mist") {
        dynamicIcon.src = "./weather-icons-master/design/fill/animation-ready/mist.svg";
    } else {
        console.log("this isnt working")
    }

}
}
//event listener when button is clicked
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})