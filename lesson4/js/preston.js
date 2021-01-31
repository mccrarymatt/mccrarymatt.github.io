var now = new Date();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var dayOfWeek = now.getDay();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayMonth = months[month] + dayOfMonth;
document.getElementById("date").innerHTML = days[dayOfWeek] + ", " + dayOfMonth + " " + months[month] + " " + now.getFullYear();

function displayMenu() {
    var media = window.matchMedia("(min-width: 37.5em)")
    if (media.matches) {
        document.getElementsByClassName("menu-button")[0].style.display = "none";
        document.getElementsByClassName("close-menu-button")[0].style.display = "none";
        document.getElementsByClassName("navigation")[0].style.display = "grid";
      } else {
        document.getElementsByClassName("menu-button")[0].style.display = "none";
        document.getElementsByClassName("close-menu-button")[0].style.display = "flex";
        document.getElementsByClassName("navigation")[0].style.display = "grid";
      }
}

function closeMenu() {
  var media = window.matchMedia("(min-width: 37.5em)")
  if (media.matches) {
    document.getElementsByClassName("menu-button")[0].style.display = "none";
    document.getElementsByClassName("close-menu-button")[0].style.display = "none";
    document.getElementsByClassName("navigation")[0].style.display = "grid";

  } else {  
    document.getElementsByClassName("menu-button")[0].style.display = "flex";
    document.getElementsByClassName("close-menu-button")[0].style.display = "none";
    document.getElementsByClassName("navigation")[0].style.display = "none";
  }
}