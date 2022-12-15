function createNode(element) {
    return document.createElement(element);
}

  function append(parent, el) {
    return parent.appendChild(el);
}
  
//https://api.waqi.info/feed/here/?token=3b21406ee283d1489a9bc3cf5ccb723fdf99c66e
//airpolutionAPI
  




 
const url = 'https://api.waqi.info/feed/London/?token=3b21406ee283d1489a9bc3cf5ccb723fdf99c66e';
   
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data)
    {

      var condition = data.data;

      console.log(data.data.city.name);
  
    console.log(data);
    })
   
  .catch(function(error){
      console.log(error);
  });




  function AirDataFetch(IDTAG , classifcName   ) //example of one of the name being entered ClassifcName would be '&classificationName=festivals&' the & are needed
  {                                            //to ad muiltiply just add another search at the end of the inittial '&classificationName=festivals&size=19&'
    const collection = document.getElementById(IDTAG);
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA' + classifcName + 'size=20&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';
     
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data)
      {
    
    console.log(data);
    
        var IDTAG = data._embedded.events;
        return IDTAG.map(function(IDTAG){
    
             
            
            var card = createNode('div');
            var img = createNode('img');
            var h5 = createNode('h5');
            var imgOverlay = createNode('div');
            var p = createNode('p');
            var column = createNode("div");
            var footer = createNode("div");
            var extra = createNode('h5');
            
            extra.classList.add('card-header')
            extra.classList.add('extraHeight')
  
            img.classList.add("card-img"); 
            img.classList.add("rounded-3"); 
    
            card.classList.add('card');  
            card.classList.add('text-bg-dark');
            card.classList.add('mt-4');
    
            h5.classList.add("card-title");
            h5.classList.add("text-light");
            h5.classList.add("text-center");
            h5.classList.add("text-wrap");
            h5.classList.add("bg-dark");
            h5.classList.add("rounded");
            h5.classList.add("py-1");
            h5.classList.add("px-2");
    
            footer.classList.add("card-footer");
            footer.classList.add("bg-warning");
            
            
            
            extra.classList.add("bg-info");
            
            
            
            
  
             
  
            imgOverlay.classList.add("card-img-overlay");
    
            column.classList.add("col-xxl-3");
            column.classList.add("col-xl-4");
            column.classList.add("col-lg-6");
            column.classList.add("col-md-6");
            column.classList.add("col-sm-12");
            
            p.classList.add('card-text');
            p.classList.add('text-primary');
            
            
            var counter = 0 ;
            while (true){
              widthSport = img.src = IDTAG.images[counter].width;
              heightSport = img.src = IDTAG.images[counter].height;
    
              if (widthSport == 1024 && heightSport == 683){img.src = IDTAG.images[counter].url; break;}
    
              counter++;
    
            }
            
            
             
            footer.innerHTML =  ("Date:&nbsp;" +(IDTAG.dates.start.localDate).toString())  + "<br>" + ("starts at:" + (IDTAG.dates.start.localTime).toString()) ;
    
            h5.innerHTML = IDTAG._embedded.venues[0].city.name;
            
            p.innerHTML = " ";
  
            //if((IDTAG.name).length == )
            
            extra.innerHTML = IDTAG.name + (IDTAG.name).lenght;
    
    
            
            append(card , img);
            append(imgOverlay,h5);
            append(imgOverlay, p);
            append(card, imgOverlay);
            append(card, footer);
            append(card, extra);
            
            append(column, card);
            append(collection, column);
    
    
        })
    
    })
    .catch(function(error){
    
      console.log(error);
    });
  }










function FetchCycle(IDTAG , classifcName   ) //example of one of the name being entered ClassifcName would be '&classificationName=festivals&' the & are needed
{                                            //to ad muiltiply just add another search at the end of the inittial '&classificationName=festivals&size=19&'
  const collection = document.getElementById(IDTAG);
  const url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA' + classifcName + 'size=20&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';
   
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data)
    {
  
  console.log(data);
  
      var IDTAG = data._embedded.events;
      return IDTAG.map(function(IDTAG){
  
           
          
          var card = createNode('div');
          var img = createNode('img');
          var h5 = createNode('h5');
          var imgOverlay = createNode('div');
          var p = createNode('p');
          var column = createNode("div");
          var footer = createNode("div");
          var extra = createNode('h5');
          
          extra.classList.add('card-header')
          extra.classList.add('extraHeight')

          img.classList.add("card-img"); 
          img.classList.add("rounded-3"); 
  
          card.classList.add('card');  
          card.classList.add('text-bg-dark');
          card.classList.add('mt-4');
  
          h5.classList.add("card-title");
          h5.classList.add("text-light");
          h5.classList.add("text-center");
          h5.classList.add("text-wrap");
          h5.classList.add("bg-dark");
          h5.classList.add("rounded");
          h5.classList.add("py-1");
          h5.classList.add("px-2");
  
          footer.classList.add("card-footer");
          footer.classList.add("bg-warning");
          
          
          
          extra.classList.add("bg-info");
          
          
          
          

           

          imgOverlay.classList.add("card-img-overlay");
  
          column.classList.add("col-xxl-3");
          column.classList.add("col-xl-4");
          column.classList.add("col-lg-6");
          column.classList.add("col-md-6");
          column.classList.add("col-sm-12");
          
          p.classList.add('card-text');
          p.classList.add('text-primary');
          
          
          var counter = 0 ;
          while (true){
            widthSport = img.src = IDTAG.images[counter].width;
            heightSport = img.src = IDTAG.images[counter].height;
  
            if (widthSport == 1024 && heightSport == 683){img.src = IDTAG.images[counter].url; break;}
  
            counter++;
  
          }
          
          
           
          footer.innerHTML =  ("Date:&nbsp;" +(IDTAG.dates.start.localDate).toString())  + "<br>" + ("starts at:" + (IDTAG.dates.start.localTime).toString()) ;
  
          h5.innerHTML = IDTAG._embedded.venues[0].city.name;
          
          p.innerHTML = " ";

          //if((IDTAG.name).length == )
          
          extra.innerHTML = IDTAG.name + (IDTAG.name).lenght;
  
  
          
          append(card , img);
          append(imgOverlay,h5);
          append(imgOverlay, p);
          append(card, imgOverlay);
          append(card, footer);
          append(card, extra);
          
          append(column, card);
          append(collection, column);
  
  
      })
  
  })
  .catch(function(error){
  
    console.log(error);
  });
















}

  
  
FetchCycle('Sports' , '&classificationName=festivals&' );
FetchCycle('Hockey' , '&classificationName=hockey&' );
FetchCycle('Com' , '&classificationName=comedy&' );
 

$("#combutton").click(function() { 

  Com.innerHTML = "";

  var x = "";
  var y = "";
  x = $("#comTextBox").val();
  y = $("#comTextBox1").val();
  
  var city = 'city=' + x + '&';
  var date = 'startDateTime=' + y + 'T00:00:00Z&' ;
   

  if (y == ""){date = "";}
  if (x == ""){city = "";}

  FetchCycle('Com' , '&classificationName=comedy&' + city  + date );
})




$("#festbutton").click(function() { 

  Sports.innerHTML = "";

  var x = "";
  var y = "";
  x = $("#festvTextBox").val();
  y = $("#festvTextBox1").val();
  
  var city = 'city=' + x + '&';
  var date = 'localStartDateTime=' + y + 'T00:00:00&' ;

  if (y == ""){date = "";}
  if (x == ""){city = "";}

  FetchCycle('Sports' , '&classificationName=festivals&' + city  + date );
})






$("#hockbutton").click(function() { 

  Hockey.innerHTML = "";

  var x = "";
  var y = "";
  x = $("#hockTextBox").val();
  y = $("#hockTextBox1").val();
  
  var city = 'city=' + x + '&';
  var date = 'startDateTime=' + y + 'T00:00:00Z&' ;

  if (y == ""){date = "";}
  if (x == ""){city = "";}

  FetchCycle('Hockey' , '&classificationName=hockey&' + city  + date );
})











/** 
const RaveCollection = document.getElementById('Rave');
const urlRave = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA&city=Toronto&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';

fetch(urlRave)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Rave = data._embedded.events;
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

        column.classList.add("col-xxl-3");
        column.classList.add("col-xl-4");
        column.classList.add("col-lg-6");
        column.classList.add("col-md-6");
        column.classList.add("col-sm-12");
        
        p.classList.add('card-text');
        p.classList.add('text-primary');
        
        
        
        var counterRave = 0 ;
        while (true){
          widthSport = img.src = Rave.images[counterRave].width;
          heightSport = img.src = Rave.images[counterRave].height;

          if (widthSport == 1024 && heightSport == 683){img.src = Rave.images[counterRave].url; break;}

          counterRave++;

        }

         
        footer.innerHTML =  "Date:&nbsp;" +(Rave.dates.start.localDate).toString() + "<br>" + (Rave.dates.start.localTime).toString() ;
        
       

        h5.innerHTML = Rave.name;
        
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
  
*/



//coppie of working fetch incase of disaster
/**
 const HockeyCollection = document.getElementById('Hockey');
const urlHockey = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA&classificationName=hockey&apikey=fqaqhbcCOEoIvdAxAwfBOgTmocXJowJI';

fetch(urlHockey)
  .then((resp) => resp.json())
  .then(function(data)
  {

console.log(data);

    var Hockey = data._embedded.events;
    return Hockey.map(function(Hockey){

         
        
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

        column.classList.add("col-xxl-3");
        column.classList.add("col-xl-4");
        column.classList.add("col-lg-6");
        column.classList.add("col-md-6");
        column.classList.add("col-sm-12");
         
        p.classList.add('card-text');
        p.classList.add('text-primary');
        
        
        
         
        var counterHockey = 0 ;
        while (true){
          widthSport = img.src = Hockey.images[counterHockey].width;
          heightSport = img.src = Hockey.images[counterHockey].height;

          if (widthSport == 1024 && heightSport == 683){img.src = Hockey.images[counterHockey].url; break;}

          counterHockey++;

        }

         
        footer.innerHTML =  "Date:&nbsp;" +(Hockey.dates.start.localDate).toString() + "<br>" + (Hockey.dates.start.localTime).toString() ;
        
       

        h5.innerHTML = Hockey.name;
        
        p.innerHTML = " ";


        
        

        append(card , img);
        append(imgOverlay,h5);
        append(imgOverlay, p);
        append(card, imgOverlay);
        append(card, footer);
        
        append(column, card);
        append(HockeyCollection, column);


    })

})
.catch(function(error){

  console.log(error);
});

 */