var now = new Date();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var dayOfWeek = now.getDay();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayMonth = months[month] + dayOfMonth;
document.getElementById("date").innerHTML = days[dayOfWeek] + ", " + dayOfMonth + " " + months[month] + " " + now.getFullYear();

function menu() {
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu-img");
    if (nav.style.display === "grid") {
        nav.style.display = "none"
        menu.setAttribute("src", "images/menu-empty.svg")
    } else {
        nav.style.display = "grid";
        menu.setAttribute("src", "images/menu-filled.svg")
    }
}