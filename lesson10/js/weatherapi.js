
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3c8f0c832f40d0c980d88dc2c0b797af";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //Refers to the current temp in the main section which is imperial due to &units=imperial
        document.getElementById('current-temp').textContent = jsObject.main.temp; 

        // Builds the url to the image using the constant location on the site and the dynamic icon from the JSON.
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  

        //Pulls the description from the json to use as the alt for the img.
        const desc = jsObject.weather[0].description; 

        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only

        //Use the initalized variables to set the proper attributes for the icon.
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);

});

