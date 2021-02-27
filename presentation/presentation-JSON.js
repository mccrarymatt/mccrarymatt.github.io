function displayFruit(){

    var request = new XMLHttpRequest();
    request.open("GET","fruit.JSON", false);
    request.send(null);
    var jsonData = JSON.parse(request.responseText);

    
    var table="<tr><th>Name</th><th>Color</th><th>Taste</th></tr>";

    var count = Object.keys(jsonData.fruit).length;
    for (i = 0; i < count; i++) {
      table += "<tr><td>" + jsonData.fruit[i].name + "</td><td>" + jsonData.fruit[i].color + "</td><td>" + jsonData.fruit[i].taste + "</td></tr>";
    }

    /*
     jsonData = [ { "id":"01", "name": "Apple", "color": "red", "taste": "sweet"}, 
    { "id":"02", "name": "Lemon", "color": "yellow", "taste": "sour"}, 
    { "id":"03", "name":"Orange", "color":"orange", "taste":"tangy"},
    { "id":"04", "name":"Pear", "color":"green", "taste":"sweet"},
    { "id":"05", "name":"Strawberry", "color":"red", "taste":"sweet"}]

    var count = Object.keys(jsonData).length;
    for (i = 0; i < count; i++) {
        table += "<tr><td>" + jsonData[i].name + "</td><td>" + jsonData[i].color + "</td><td>" + jsonData[i].taste + "</td></tr>";
    }
    */

    document.getElementById("fruit").innerHTML = table;

    
}