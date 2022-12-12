function createNode(element) {
    return document.createElement(element);
}

  function append(parent, el) {
    return parent.appendChild(el);
}
  
  
  
//const movieContainer = document.getElementById("Movie");
//const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4bd6c391';
  
  

  
  
  
  
//const numberOfUsers = 10;
const SportCollection = document.getElementById('Sports');
const urlSports = 'https://api.seatgeek.com/2/events?type=NBA&client_id=MzA5MTQ0NDV8MTY3MDY5NTgzMS4zMzk0NzQy';

fetch(urlSports)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Sports = data.events;
    return Sports.map(function(Sports){

         
         
        var img = createNode('img');
        var h5 = createNode('h5');
        var p = createNode('p')
        var column = createNode("div");
        var card = createNode('div');
        var cardBody = createNode('div');
        var button = createNode('div');
        var cardHeader = createNode('div');


            

        cardHeader.classList.add('card-header')    
        button.classList.add('btn');
        button.classList.add('btn-primary');
        cardBody.classList.add('card-body');
        card.classList.add('card');
        column.classList.add("col-3");
        img.classList.add("card-img-top");
        h5.classList.add("card-title");

        p.classList.add('card-title');
        p.classList.add('card-text');
        card.classList.add('mt-5');
        
         
         
        var split = Sports.datetime_local.split('T');
             
        p.innerHTML = split[1];
        cardHeader.innerHTML = split[0];


        img.src = Sports.performers[0].image;
         
        h5.innerHTML = Sports.title;
        button.innerHTML = "Furhter Deatils";


        
        

        append(card, cardHeader)
        append(card , img);
        append(cardBody,h5);
        append(cardBody, p);
         
        append(card, cardBody);
        append(card, button)
        append(column, card);
        append(SportCollection, column);

    })

  })
  .catch(function(error){

    console.log(error);
  });


const MusicCollection = document.getElementById('Music');
const urlMusic = 'https://api.seatgeek.com/2/events?type=concert&client_id=MzA5MTQ0NDV8MTY3MDY5NTgzMS4zMzk0NzQy';

fetch(urlMusic)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Music = data.events;
    return Music.map(function(Music){

         
         
        var img = createNode('img');
        var h5 = createNode('h5');
        var p = createNode('p')
        var column = createNode("div");
        var card = createNode('div');
        var cardBody = createNode('div');
        var button = createNode('div');
        var cardHeader = createNode('div');


            

        cardHeader.classList.add('card-header')    
        button.classList.add('btn');
        button.classList.add('btn-primary');
        cardBody.classList.add('card-body');
        card.classList.add('card');
        column.classList.add("col-3");
        img.classList.add("card-img-top");
        h5.classList.add("card-title");

        p.classList.add('card-title');
        p.classList.add('card-text');
        card.classList.add('mt-5');
        
         
         
        var split = Music.datetime_local.split('T');
             
        p.innerHTML = split[1];
        cardHeader.innerHTML = split[0];


        img.src = Music.performers[0].image;
         
        h5.innerHTML = Sports.title;
        button.innerHTML = "Furhter Deatils";


        
        

        append(card, cardHeader)
        append(card , img);
        append(cardBody,h5);
        append(cardBody, p);
         
        append(card, cardBody);
        append(card, button)
        append(column, card);
        append(MusicCollection, column);


    })

})
.catch(function(error){

  console.log(error);
});
  