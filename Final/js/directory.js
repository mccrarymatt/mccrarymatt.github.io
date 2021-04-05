const apiCurrentURL = "https://mccrarymatt.github.io/Final/json/businesses.json"

fetch(apiCurrentURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let cards = document.getElementById("business-cards");

        for (var i = 0; i < jsObject.length; i++){
            let card = document.createElement("div");
            let img = document.createElement("img");
            let list = document.createElement("ul");

            img.setAttribute("src", jsObject[i].logo);
            img.setAttribute("alt", jsObject[i].name);
            let link = "<a href=\"" + jsObject[i].link + "\">" + jsObject[i].link + "</a>";

            list.innerHTML = "<li>Name: " + jsObject[i].name + "</li><li>Website : " + link + "</li><li>Email : " + jsObject[i].email + "</li><li>Phone : " + jsObject[i].phone + "</li><li>Address : " + jsObject[i].address + "</li>";

            card.appendChild(img);
            card.appendChild(list);

            cards.appendChild(card);

        }

    });

function displayGrid() {
    let cards = document.getElementById("business-cards");
    cards.style.gridTemplateColumns = "auto auto";
}

function displayList() {
    let cards = document.getElementById("business-cards");
    cards.style.gridTemplateColumns = "auto";
}