window.onload = function () {


    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const eventContainer = document.getElementById('events');

    url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=0&size=40&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';

    curl = 'https://api.open-meteo.com/v1/forecast?latitude=-90.0&longitude=35.13&hourly=temperature_2m&current_weather=true';

    fetch(curl)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {

            console.log(error);
        });



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
                var a = createNode('a');
                //get the longitude and the latitude
                var longitude = events._embedded.venues[0].location.longitude;
                var latitude = events._embedded.venues[0].location.latitude;

                console.log(longitude, latitude);
                
                //get the event name
                h5.innerHTML = events.name;
                //get the city of venue of event
                h6.innerHTML = events._embedded.venues[0].city.name;
                //get the type of event
                p.innerHTML = events.classifications[0].genre.name;
                //get an image for the event
                img.src = events.images[0].url;
                //get the link for the tickets
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