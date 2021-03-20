const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('div');
        let data = document.createElement('div');
        let image = document.createElement('img');
        let events =document.createElement('div');

        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {

            h2.textContent = towns[i].name;
            h2.setAttribute('class', 'town-name')
            motto.textContent = '"' + towns[i].motto + '"';
            motto.setAttribute('class', 'town-motto')
            data.innerHTML = 'Year Founded: ' + towns[i].yearFounded + '<br>Population: ' + towns[i].currentPopulation + '<br>Annual Rain Fall: ' + towns[i].averageRainfall;
            data.setAttribute('class', 'town-data')
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            image.setAttribute('class', 'town-photo')
            image.setAttribute('loading', 'lazy');

            for (let iEvent = 0; iEvent < towns[i].events.length; iEvent++){
                events.innerHTML += towns[i].events[iEvent] + '<br>';
            }
            events.setAttribute('class', 'town-events')
            
            
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(data);
            card.appendChild(image); 
            card.appendChild(events)
            
            document.querySelector('div.town-cards').appendChild(card);

        }





    }
    
});

