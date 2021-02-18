var now = new Date();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var dayOfWeek = now.getDay();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayMonth = months[month] + dayOfMonth;
document.getElementById("date").innerHTML = days[dayOfWeek] + ", " + dayOfMonth + " " + months[month] + " " + now.getFullYear();
