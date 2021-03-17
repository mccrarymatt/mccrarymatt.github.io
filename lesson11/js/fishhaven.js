const apiCurrentURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=3c8f0c832f40d0c980d88dc2c0b797af";


fetch(apiCurrentURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //Set the current to the weather main description and the curremt temperature.
        document.getElementById('current').innerHTML = jsObject.weather[0].main + " " + jsObject.main.temp + "&#176;F"; 

        document.getElementById('highTemp').innerHTML = jsObject.main.temp_max + "&#176;F";

        if (parseFloat(jsObject.main.temp) <= 50 && parseFloat(jsObject.wind.speed) > 3.0) {

            let temp = parseFloat(jsObject.main.temp);

            let windSpeed = parseFloat(jsObject.wind.speed);

            let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;

            document.getElementById("windChill").innerHTML = windChill.toFixed(1) + "&#176;F";
        } else {

            document.getElementById("windChill").innerHTML = "N/A"
        
        }

        document.getElementById('humidity').innerHTML = jsObject.main.humidity + "%";

        document.getElementById('windSpeed').innerHTML = jsObject.wind.speed + " mph";


});

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3c8f0c832f40d0c980d88dc2c0b797af";


fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        numDays = 5;
        day = 1;

        for (x in jsObject.list){
            if (jsObject.list[x].dt_txt.includes("18:00:00")){

                let forecast = document.getElementsByClassName("forecast")[0]; 
                let forecastSymbol = document.createElement("img");
                let forecastTemp =document.createElement("div");


                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png';
                const desc = jsObject.list[x].weather[0].description; 
                forecastSymbol.setAttribute('src', imagesrc);
                forecastSymbol.setAttribute('alt', desc);
                forecastSymbol.setAttribute('class', 'forecast-symbol');

                forecastTemp.innerHTML = jsObject.list[x].main.temp + "&#176;F";
                forecastTemp.setAttribute('class', 'forecast-temp');

                forecast.appendChild(forecastSymbol);
                forecast.appendChild(forecastTemp);

                day++
                if (day > 5){
                    break;
                }
            }
        }


});

let forecastDays = document.getElementsByClassName("forecast-day");
for (var i = 0; i < forecastDays.length; i++) {

    forecastDays[i].innerHTML = days[(dayOfWeek + i + 1) % 7];

}