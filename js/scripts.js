// REF: http://foundation.zurb.com/docs/    
// REF: http://simpleweatherjs.com/   

// begin document.ready(function)
 $(document).ready(function(){










var d = new Date();
  console.log(d);
var hour = d.getHours();
  console.log(hour);
var minutes = d.getMinutes();
  console.log(minutes);
var month = d.getMonth()+1;
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
  var zipCode = '92093';


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
      tomorrow = weather.forecast[1].day + ": " + weather.forecast[1].text + '<br/>' +weather.forecast[1].high+'&deg;'+weather.units.temp+ " " +tomorrowIcon;

      twoomorrowIcon = '<i class="icon-'+weather.forecast[2].code+'"></i>';
      twoomorrow = weather.forecast[2].day + ": " + weather.forecast[2].text + '<br/>' +weather.forecast[2].high+'&deg;'+weather.units.temp+ " " +twoomorrowIcon;

      threeomorrowIcon = '<i class="icon-'+weather.forecast[3].code+'"></i>';
      threeomorrow = weather.forecast[3].day + ": " + weather.forecast[3].text + '<br/>' +weather.forecast[3].high+'&deg;'+weather.units.temp+ " " +threeomorrowIcon;

      fouromorrowIcon = '<i class="icon-'+weather.forecast[4].code+'"></i>';
      fouromorrow = weather.forecast[4].day + ": " + weather.forecast[4].text + '<br/>' +weather.forecast[4].high+'&deg;'+weather.units.temp+ " " +fouromorrowIcon;

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
      tomorrow = weather.forecast[1].day + ": " + weather.forecast[1].text + '<br/>' +weather.forecast[1].high+'&deg;'+weather.units.temp+ " " +tomorrowIcon;

      twoomorrowIcon = '<i class="icon-'+weather.forecast[2].code+'"></i>';
      twoomorrow = weather.forecast[2].day + ": " + weather.forecast[2].text + '<br/>' +weather.forecast[2].high+'&deg;'+weather.units.temp+ " " +twoomorrowIcon;

      threeomorrowIcon = '<i class="icon-'+weather.forecast[3].code+'"></i>';
      threeomorrow = weather.forecast[3].day + ": " + weather.forecast[3].text + '<br/>' +weather.forecast[3].high+'&deg;'+weather.units.temp+ " " +threeomorrowIcon;

      fouromorrowIcon = '<i class="icon-'+weather.forecast[4].code+'"></i>';
      fouromorrow = weather.forecast[4].day + ": " + weather.forecast[4].text + '<br/>' +weather.forecast[4].high+'&deg;'+weather.units.temp+ " " +fouromorrowIcon;

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

// Twitter Bootstrap JS - bootstrap.min.js
// 0. Store new quotes in variables
var msg0 = 'IT\'S SOOO DAMN HOT!!!! MILK WAS A BAD CHOICE!';
var msg1 = 'I love scotch. Scotchy, scotch, scotch. Here it goes down, down into my belly...';
var msg2 = 'Look, the most glorious rainbow ever.';
var msg3 = 'How \'bout we get you in your p.j.\'s and we hit the hay.';

// 1. Show any heading

// 2. Get random number
// returns 0 to 'limit'
var limit = 4;
var numRand = Math.floor(Math.random()*limit);

$('#randomQuote').text( "\"" +  eval('msg' + numRand) + "\"");

console.log( eval('msg' + numRand)  );

// 3. if random number 0, show message 1, etc. 

});


// "IT'S SOOO DAMN HOT!!!! . . . MILK WAS A BAD CHOICE!"
// "I love scotch. Scotchy, scotch, scotch. Here it goes down, down into my belly... "
// "Look, the most glorious rainbow ever."
// "What? You pooped in the refrigerator? And you ate the whole... wheel of cheese? How'd you do that? Heck, I\'m not even mad; that's amazing. \"How \'bout we get you in your p.j.\'s and we hit the hay."
