// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/
var cheney = '99004';
  // 2. _simpleWeather()_ object
  $.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      //YO PROJECT YO!





      // // Get & store temperature
      // var temp = weather.temp;
      // // Get & store city
      // var city = weather.city;
      // //Get and store state
      // var state = weather.region;
      // console.log(state);
      // var thumb = weather.thumbnail;
      // console.log(thumb);
      // // Output to hooks in HTML
      // $('.temp').text(temp);
      // $('.city').text(city);
      // $('.state').text(state);
      // $('.thumb img').attr('src', thumb);
      // //attribute
      // // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });


