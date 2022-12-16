window.onload = function () {

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    // holds each type of event
    const sportsContainer = document.getElementById('sports');
    const musicContainer = document.getElementById('music');
    const eventContainer = document.getElementById('events');

    //ticketmaster API
    url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=2&size=20&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';
    //air pollution API
    curl = 'https://api.waqi.info/feed/shanghai/?token=3b21406ee283d1489a9bc3cf5ccb723fdf99c66e';



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
                var p1 = createNode('p');
                var p5 = createNode('p');
                var a = createNode('a');
                var a1 = createNode('a');



                //get the city of the venue
                var city = events._embedded.venues[0].city.name;

                fetch("https://api.waqi.info/feed/" + city + "/?token=3b21406ee283d1489a9bc3cf5ccb723fdf99c66e")
                    .then((resp) => resp.json())
                    .then(function (data) {

                        AQI = data.data.aqi;

                        //display the air quality index from the city name

                        p1.innerHTML = "Air Quality Index: " + AQI;
                        p1.classList.add("card-text");
                        append(cardBody, p1);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                p5 = events.id
                console.log(p5);

                //get an image for the event
                img.src = events.images[0].url;
                //get the event name
                h5.innerHTML = events.name;
                //get the city of venue of event
                h6.innerHTML = events._embedded.venues[0].city.name;
                //get the type of event
                p.innerHTML = events.classifications[0].genre.name;
                //get the link for the tickets
                a.href = events.url;
                //link to single event page
                a1.href = "event_info.html?id=" + p5;
                //get the ID of an event and store it in the p5 variable



                var column = createNode('div');
                column.classList.add("col-12");
                column.classList.add("col-sm-6");
                column.classList.add("col-md-4");
                column.classList.add("col-lg-3");
                var card = createNode('div');
                var cardBody = createNode('div');
                cardBody.classList.add("card-body");

                card.classList.add("card");
                card.classList.add("mt-3");
                img.classList.add("card-img-top");
                h5.classList.add("card-title");
                h6.classList.add("card-title");
                p.classList.add("card-text");


                a.innerHTML = "Get Tickets";
                a1.innerHTML = "Event Info";
                a.classList.add("btn");
                a.classList.add("btn-danger");
                a.classList.add("m-2");
                a1.classList.add("btn");
                a1.classList.add("btn-primary");
                a1.classList.add("m-2");

                append(card, img);
                append(cardBody, h5);
                append(cardBody, h6);
                append(cardBody, p1);

                append(cardBody, a);
                append(card, cardBody);
                append(column, card);
                append(cardBody, a1);



                var type = events.classifications[0].segment.name;
                console.log(type);
                if (type == 'Music') {
                    append(musicContainer, column);
                } else if (type == 'Sports') {
                    append(sportsContainer, column);
                }else{
                    append(eventContainer, column);
                }
            })
        })
        .catch(function (error) {

            console.log(error);
        });





}
