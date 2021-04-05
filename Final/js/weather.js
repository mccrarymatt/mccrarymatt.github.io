function hideAlert() {
    var alert = document.getElementById("alert");
    alert.style.display = "none"
}

const apiCurrentURL = "https://api.openweathermap.org/data/2.5/onecall?lat=36.499962&lon=-80.605392&exclude=minutely,hourly&units=imperial&appid=dd95f5e19a8e0befb2e74177eb667a4c";

fetch(apiCurrentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentSymbol = document.createElement("img");
        let list = document.createElement("ul");
        let currentTemp = document.createElement("li");
        let description = document.createElement("li");
        let humidity = document.createElement("li");

        let weatherSmall = document.getElementsByClassName("weather-info-small");
        let weatherLarge = document.getElementsByClassName("weather-info-large")

        currentTemp.innerHTML = (jsObject.current.temp).toFixed(1) + "&#176;F";
        humidity.innerHTML = "Humidity : " + jsObject.current.humidity + "%";
        description.innerHTML = jsObject.current.weather[0].main;

        currentTemp.setAttribute('id', 'currentTemp');

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        const desc = jsObject.current.weather[0].description;
        currentSymbol.setAttribute('src', imagesrc);
        currentSymbol.setAttribute('alt', desc);
        currentSymbol.setAttribute('class', 'current-symbol');

        list.appendChild(currentTemp);
        list.appendChild(humidity);
        list.appendChild(description);
        
        weatherSmall[0].appendChild(currentSymbol);
        weatherSmall[0].appendChild(list);

        weatherLarge[0].innerHTML = weatherSmall[0].innerHTML

        
        if (typeof jsObject.alert != "undefined"){
            let alert = document.getElementById("alert")
            let alertText = document.getElementById("alert-text")

            alert.style.display = "block";
            alertText.innerHTML = jsObject.alert.description;
        }

        let numDays = 3;
        let forecast = document.getElementsByClassName("forecast-day");

        for (var i = 0; i < forecast.length; i++) {

            forecast[i].innerHTML = "<span>" + days[(dayOfWeek + i + 1) % 7] + "</span>" ;
        
        }


        for (var i = 0; i < numDays; i++){

            let forecastSymbol = document.createElement("img")

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
            const desc = jsObject.daily[i].weather[0].description; 
            forecastSymbol.setAttribute('src', imagesrc);
            forecastSymbol.setAttribute('alt', desc);
            forecastSymbol.setAttribute('class', 'forecast-symbol');

            forecast[i].appendChild(forecastSymbol);

            forecast[i].innerHTML += (jsObject.daily[i].temp.day).toFixed(1) + "&#176;F";

        }

    });
