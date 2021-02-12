let temp = parseFloat(document.getElementById("temperature").innerHTML)

let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML)

if (temp <= 50 && windSpeed > 3.0) {

    let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
    document.getElementById("windChill").innerHTML = parseInt(windChill)

} else {

    document.getElementById("windChill").innerHTML = "N/A"

}