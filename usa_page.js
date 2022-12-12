window.onload = function () {


    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const eventContainer = document.getElementById('events');

    url = 'https://api.seatgeek.com/2/events/?client_id=MzA5MTQ0NDV8MTY3MDY5NTgzMS4zMzk0NzQy';

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);

            var events = data.events;
            return events.map(function (events) {
                var img = createNode('img');
                var h5 = createNode('h5');
                var h6 = createNode('h6');
                var p = createNode('p');
                var p2 = createNode('p');
                var a = createNode('a');

                // Only show events in the US
                if (events.venue.country == "US") {
                    p.innerHTML = events.venue.city;
                    p2.innerHTML = events.venue.state;
                    img.src = events.performers[0].image;
                    h6.innerHTML = events.venue.name;
                    h5.innerHTML = events.performers[0].name;
                    a.href = events.url;

                    var column = createNode('div');
                    column.classList.add("col-3");
                    var card = createNode('div');
                    var cardBody = createNode('div');
                    cardBody.classList.add("card-body")

                    card.classList.add("card");
                    card.classList.add("mt-3");
                    img.classList.add("card-img-top");
                    h5.classList.add("card-title");
                    h6.classList.add("card-title");
                    p.classList.add("card-text");
                    a.innerHTML = "Get Tickets";
                    a.classList.add("btn")
                    a.classList.add("btn-danger")

                    append(card, img);
                    append(cardBody, h5);
                    append(cardBody, h6);
                    append(cardBody, p);
                    append(cardBody, p2);
                    append(cardBody, a);


                    append(card, cardBody);
                    append(column, card);


                    append(eventContainer, column);
                }

            })


        })
        .catch(function (error) {

            console.log(error);
        });






}