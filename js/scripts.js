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


// input zip box
  var zipCode = '99004';


// on click weather gathered
  $('.button').on('click', function(){

    var zipCode = $('input').val();
    console.log(zipCode);

    $.simpleWeather({
      location: zipCode,
      woeid: '',
      unit: 'f',

      success: function(weather) {
        icon = '<h2><i class="icon-'+weather.code+'"></i></h2>';
        html = '<p>'+weather.temp+'&deg;'+weather.units.temp+ " / " +'</p>';
        html = html + '<p>' + weather.currently + '<p>';
        highlow = '<br/>' + 'high: ' +weather.forecast[0].high + ' low: ' +weather.forecast[0].low;

        title = '<p>' + weather.city + ", " + weather.region + '<p>';
        
      tomorrowIcon = '<i class="icon-'+weather.forecast[1].code+'"></i>';
      tomorrow = weather.forecast[1].day + ": " + weather.forecast[1].text + " " +weather.forecast[1].high+'&deg;'+weather.units.temp+ " " +tomorrowIcon;

      twoomorrowIcon = '<i class="icon-'+weather.forecast[2].code+'"></i>';
      twoomorrow = weather.forecast[2].day + ": " + weather.forecast[2].text + " " +weather.forecast[2].high+'&deg;'+weather.units.temp+ " " +twoomorrowIcon;

      threeomorrowIcon = '<i class="icon-'+weather.forecast[3].code+'"></i>';
      threeomorrow = weather.forecast[3].day + ": " + weather.forecast[3].text + " " +weather.forecast[3].high+'&deg;'+weather.units.temp+ " " +threeomorrowIcon;

      fouromorrowIcon = '<i class="icon-'+weather.forecast[4].code+'"></i>';
      fouromorrow = weather.forecast[4].day + ": " + weather.forecast[4].text + " " +weather.forecast[4].high+'&deg;'+weather.units.temp+ " " +fouromorrowIcon;

      $('#weather').html(html);
      $('i').html(icon);
      $('.HighLow').html(highlow);
      $("h1").html(title);
      $('.tomorrow').html(tomorrow);
      $('.twoomorrow').html(twoomorrow);
      $('.threeomorrow').html(threeomorrow);
      $('.fouromorrow').html(fouromorrow);
      },
      error: function(error) {
        $(".weather").html('<p>'+error+'</p>');
      }
    //END simpleWeather 
    });
  //END on click weather gathered
  });


  //WEATHER START
  $.simpleWeather({
      location: zipCode,
      woeid: '',
      unit: 'f',

    success: function(weather) {
      icon = '<h2><i class="icon-'+weather.code+'"></i>';
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+ " / " +'</p>';
      html = html + '<p>' + weather.currently + '<p>';

      title = '<p>' + weather.city + ", " + weather.region + '<p>';
      highlow = '<br/>' + 'high: ' +weather.forecast[0].high + ' low: ' +weather.forecast[0].low;
      console.log(weather.forecast[1].text);
      
      tomorrowIcon = '<i class="icon-'+weather.forecast[1].code+'"></i>';
      tomorrow = weather.forecast[1].day + ": " + weather.forecast[1].text + " " +weather.forecast[1].high+'&deg;'+weather.units.temp+ " " +tomorrowIcon;

      twoomorrowIcon = '<i class="icon-'+weather.forecast[2].code+'"></i>';
      twoomorrow = weather.forecast[2].day + ": " + weather.forecast[2].text + " " +weather.forecast[2].high+'&deg;'+weather.units.temp+ " " +twoomorrowIcon;

      threeomorrowIcon = '<i class="icon-'+weather.forecast[3].code+'"></i>';
      threeomorrow = weather.forecast[3].day + ": " + weather.forecast[3].text + " " +weather.forecast[3].high+'&deg;'+weather.units.temp+ " " +threeomorrowIcon;

      fouromorrowIcon = '<i class="icon-'+weather.forecast[4].code+'"></i>';
      fouromorrow = weather.forecast[4].day + ": " + weather.forecast[4].text + " " +weather.forecast[4].high+'&deg;'+weather.units.temp+ " " +fouromorrowIcon;

      console.log(weather);

      $('#weather').html(html);
      $('i').html(icon);
      $('.HighLow').html(highlow);
      $("h1").html(title);
      $('.tomorrow').html(tomorrow);
      $('.twoomorrow').html(twoomorrow);
      $('.threeomorrow').html(threeomorrow);
      $('.fouromorrow').html(fouromorrow);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

  });//End Simple Weather




// // 2. _simpleWeather()_ object
//   $.simpleWeather({
    
//     location: '99004', // change zip
//     unit: 'f',
    
//     // Get _weather_ object
//     success: function(weather) {
      
//       // Get & store temperature
//       var temp = weather.temp;
//       // Get & store city
//       var city = weather.city;
//       //Get and store state
//       var state = weather.region;
//       console.log(state);
//       var thumb = weather.thumbnail;
//       console.log(thumb);
//       // Output to hooks in HTML
//       $('.temp').text(temp);
//       $('.city').text(city);
//       $('.state').text(state);
//       $('.thumb img').attr('src', thumb);
//       //attribute
//       // See console for _weather_ object
//       console.log(weather);
//     },
  
//     // if error
//     error: function(error) {  
//       $('body').html('<p>' + error + '</p>');
//     }
//   });

// end document.ready(function)
});
