const businessJson = "https://mccrarymatt.github.io/Final/json/businesses.json"

fetch(businessJson)
    .then((response) => response.json())
    .then((jsObject) => {

        let cards = document.getElementById("featured-businesses");

        for (var i = 0; i < 3; i++){
            let card = document.createElement("div");
            let img = document.createElement("img");
            let list = document.createElement("ul");

            img.setAttribute("src", jsObject[i + 2].logo);
            img.setAttribute("alt", jsObject[i + 2].name);
            let link = "<a href=\"" + jsObject[i + 2].link + "\">" + jsObject[i + 2].link + "</a>";

            list.innerHTML = "<li>Name: " + jsObject[i + 2].name + "</li><li>Website : " + link + "</li><li>Email : " + jsObject[i + 2].email + "</li><li>Phone : " + jsObject[i + 2].phone + "</li><li>Address : " + jsObject[i + 2].address + "</li>";

            card.appendChild(img);
            card.appendChild(list);

            cards.appendChild(card);

        }

    });