// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// begin document.ready(function)
 $(document).ready(function(){

var d =new Date();
  console.log(d);
var hour = d.getHours();
  console.log(hour);
var minutes = d.getMinutes();
  console.log(minutes);
var month = d.getMonth();
  console.log(month);
var day = d.getDate();
  console.log(day);
var year = d.getFullYear(); 
  console.log(year);


// sets time with AM or PM
  if(hour>12)
      var apm = "pm";
    else
      var apm = "am";

  var hour = hour%12;
    if(hour%12 == 0)
      var hour = 12;
    if(minutes < 10)
      var minutes = "0" + minutes;

  var date = month + "-" + day + "-" + year;
  var time = hour + ":" + minutes + " " + apm;

  $('.date').text(date + " | ");
  $('.time').text(time);


 // 2. _simpleWeather()_ object
    $.simpleWeather({
      
      location: '99004', // change zip
      unit: 'f',
      
      // Get _weather_ object
      success: function(weather) {
        
        // Get & store temperature
        var temp = weather.temp;
        // Get & store city
        var city = weather.city;
        //Get and store state
        var state = weather.region;
        console.log(state);
        var thumb = weather.thumbnail;
        console.log(thumb);
        // Output to hooks in HTML
        $('.temp').text(temp);
        $('.city').text(city);
        $('.state').text(state);
        $('.thumb img').attr('src', thumb);
        //attribute
        // See console for _weather_ object
        console.log(weather);
      },
    
      // if error
      error: function(error) {  
        $('body').html('<p>' + error + '</p>');
      }
    });
    
// end document.ready(function)
  });
