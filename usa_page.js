window.onload = function () {


    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const eventContainer = document.getElementById('events');

    url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=0&size=40&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';



    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);

            var events = data._embedded.events;
            return events.map(function (events) {
                var img = createNode('img');
                var h5 = createNode('h5');
                var h6 = createNode('h6');
                var p = createNode('p');
                var p2 = createNode('p');
                var a = createNode('a');

                p.innerHTML = events.name;
                p2.innerHTML = events.classifications[0].genre.name;
                img.src = events.images[0].url;
                h6.innerHTML = events.name;
                h5.innerHTML = events.classifications[0].genre.name;
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




            )
        })
        .catch(function (error) {

            console.log(error);
        });






}