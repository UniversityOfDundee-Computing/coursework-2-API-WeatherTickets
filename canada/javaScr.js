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

         
        
        var card = createNode('div');
        var img = createNode('img');
        var h5 = createNode('h5');
        var imgOverlay = createNode('div');
        var p = createNode('p');
        var column = createNode("div");
        var footer = createNode("div")
        

        img.classList.add("card-img"); 
        img.classList.add("rounded-3"); 

        card.classList.add('card');  
        card.classList.add('text-bg-dark');
        card.classList.add('mt-4');

        h5.classList.add("card-title");
        h5.classList.add("text-light");
        h5.classList.add("text-wrap");
        h5.classList.add("bg-dark");
        h5.classList.add("rounded");
        h5.classList.add("py-1");
        h5.classList.add("px-2");

        footer.classList.add("card-footer");
        footer.classList.add("bg-warning");
        

        imgOverlay.classList.add("card-img-overlay");

        column.classList.add("col-4");
        
        p.classList.add('card-text');
        p.classList.add('text-primary');
        
        
        
         
        var split = Sports.datetime_local.split('T');
        footer.innerHTML =  split[0] ;
        
        img.src = Sports.performers[0].image;

        h5.innerHTML = Sports.title;
        
        p.innerHTML = " ";


        
        

        append(card , img);
        append(imgOverlay,h5);
        append(imgOverlay, p);
        append(card, imgOverlay);
        append(card, footer);
        
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

         
        
        var card = createNode('div');
        var img = createNode('img');
        var h5 = createNode('h5');
        var imgOverlay = createNode('div');
        var p = createNode('p');
        var column = createNode("div");
        var footer = createNode("div")
        

        img.classList.add("card-img"); 
        img.classList.add("rounded-3"); 

        card.classList.add('card');  
        card.classList.add('text-bg-dark');
        card.classList.add('mt-4');

        h5.classList.add("card-title");
        h5.classList.add("text-light");
        h5.classList.add("text-wrap");
        h5.classList.add("bg-dark");
        h5.classList.add("rounded");
        h5.classList.add("py-1");
        h5.classList.add("px-2");

        footer.classList.add("card-footer");
        footer.classList.add("bg-warning");
        

        imgOverlay.classList.add("card-img-overlay");

        column.classList.add("col-4");
        
        p.classList.add('card-text');
        p.classList.add('text-primary');
        
        
        
         
        var split = Music.datetime_local.split('T');
        footer.innerHTML =  split[0] ;
        
        img.src = Music.performers[0].image;

        h5.innerHTML = Music.title;
        
        p.innerHTML = " ";


        
        

        append(card , img);
        append(imgOverlay,h5);
        append(imgOverlay, p);
        append(card, imgOverlay);
        append(card, footer);
        
        append(column, card);
        append(MusicCollection, column);


    })

})
.catch(function(error){

  console.log(error);
});





const RaveCollection = document.getElementById('Rave');
const urlRave = 'https://api.seatgeek.com/2/events?venue.country=Canada&client_id=MzA5MTQ0NDV8MTY3MDY5NTgzMS4zMzk0NzQy';

fetch(urlRave)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Rave = data.events;
    return Rave.map(function(Rave){

         
        
        var card = createNode('div');
        var img = createNode('img');
        var h5 = createNode('h5');
        var imgOverlay = createNode('div');
        var p = createNode('p');
        var column = createNode("div");
        var footer = createNode("div")
        

        img.classList.add("card-img"); 
        img.classList.add("rounded-3"); 

        card.classList.add('card');  
        card.classList.add('text-bg-dark');
        card.classList.add('mt-4');

        h5.classList.add("card-title");
        h5.classList.add("text-light");
        h5.classList.add("text-wrap");
        h5.classList.add("bg-dark");
        h5.classList.add("rounded");
        h5.classList.add("py-1");
        h5.classList.add("px-2");

        footer.classList.add("card-footer");
        footer.classList.add("bg-warning");
        

        imgOverlay.classList.add("card-img-overlay");

        column.classList.add("col-4");
        
        p.classList.add('card-text');
        p.classList.add('text-primary');
        
        
        
         
        var split = Rave.datetime_local.split('T');
        footer.innerHTML =  split[0] ;
        
        img.src = Rave.performers[0].image;

        h5.innerHTML = Rave.title;
        
        p.innerHTML = " ";


        
        

        append(card , img);
        append(imgOverlay,h5);
        append(imgOverlay, p);
        append(card, imgOverlay);
        append(card, footer);
        
        append(column, card);
        append(RaveCollection, column);


    })

})
.catch(function(error){

  console.log(error);
});
  




//coppie of working fetch incase of disaster
/**
 * const SportCollection = document.getElementById('Sports');
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
        var cardHeader = createNode('div');


            

        cardHeader.classList.add('card-header')    
        cardBody.classList.add('card-body');
        card.classList.add('card');

         

         

        column.classList.add("col-xxl-4");
        column.classList.add("col-xl-4");
        column.classList.add("col-lg-6");
        column.classList.add("col-md-6");
        column.classList.add("col-sm-12");

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
         


        
        

        append(card, cardHeader)
        append(card , img);
        append(cardBody,h5);
        append(cardBody, p);
         
        append(card, cardBody);
        append(column, card);
        append(SportCollection, column);
         

    })

  })
  .catch(function(error){

    console.log(error);
  });
 * 
 * 
 * 
 * 
 * 
 * 
 */