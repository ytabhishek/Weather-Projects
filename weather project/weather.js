 const apiKey = "86324cfb2b1d357e6093d9a4df19a4b";
 const apiUrl =  "http://api.openweathermap.org/data/2.5/weather?units=metric";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = awiat fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").computedStyleMap.display = "block";
        document.querySelector(".weather").computedStyleMap.display = "none";
    }else{
        
    var data = awiat response.json();

    

    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round( data.main.temp) +"°c";
document.querySelector(".humidity").innerHTML = data.main.humidity  +"%";

document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


if(data.weather[0].main=="Clouds"){
    weathericon.src = "image/clouds.png";
}else if(data.weather[0].main == "Clear"
){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"
){
    weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Dizzle"
){
    weatherIcon.src = "images/dizzle.png";
}
else if(data.weather[0].main == "Mist"
){
    weatherIcon.src = "images/mist.png";
}
document.querySelector(".weather").computedStyleMap.display = "block";
document.querySelector(".error").computedStyleMap.display = "none";
    }


}

searchBox.BtnaddEventListener("click" , () =>{
    checkWeather(searchBox.value);
})

checkWeather();
