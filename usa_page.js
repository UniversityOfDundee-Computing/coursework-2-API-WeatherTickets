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
                var p = createNode('p');
                var href = createNode('href')


                img.src = events.performers[0].image;
                h5.innerHTML = events.venue.name;
                p.innerHTML = events.venue.city;
                

                var column = createNode('div');
                column.classList.add("col-3");
                var card = createNode('div');
                var cardBody = createNode('div');
                cardBody.classList.add("card-body")

                card.classList.add("card");
                card.classList.add("mt-3");
                img.classList.add("card-img-top");
                h5.classList.add("card-title");
                p.classList.add("card-text");

                append(card, img);
                append(cardBody, h5);
                append(cardBody, h5);
                append(cardBody, p);


                append(card, cardBody);
                append(column, card);


                append(eventContainer, column);

            })


        })
        .catch(function (error) {

            console.log(error);
        });






}