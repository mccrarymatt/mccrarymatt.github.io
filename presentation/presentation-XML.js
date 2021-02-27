function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        displayFruitXml(this);
      }
    };
    xmlhttp.open("GET", "fruit.XML", true);
    xmlhttp.send();
  }

function displayFruitXml(xml){
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Color</th><th>Taste</th></tr>";
    var x = xmlDoc.getElementsByTagName("fruit");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("color")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("taste")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("fruit").innerHTML = table;

    
}