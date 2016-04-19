/*

var d = new Date();
var n = d.getTime();

console.log(d);
console.log(n);


How’s the weather?

Go to Forecast.io API and read the documentation

Get yourself a free API key

Remember the Google Geocoding API from yesterday’s workshop

Using both APIs, complete the following workflow:

Ask the user for their location

Retrieve the weather for the user’s location

Display the current weather as well as the next 5 days weather in a nice way

Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:

colors

cli-table

node-emoji

Add/commit/push


To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
*/

var prompt = require('prompt');

prompt.start();

prompt.get(['city'], function(err, result) {
    var homeCity = result.city;
    var addressLocator = "https://maps.googleapis.com/maps/api/geocode/json?address=" + homeCity.toLowerCase();
    var request = require("request");
    
        request(addressLocator, function(err, result) {

        var resultObject = JSON.parse(result.body);
        var homeLat = resultObject.results[0].geometry.location.lat;
        var homeLong = resultObject.results[0].geometry.location.lng
        
        var request = require("request");
        var webAddressWeather = "https://api.forecast.io/forecast/bac51620e2c437e54c2464381784b4c2/"+homeLat+","+homeLong;
        
        //console.log(webAddressWeather);
        
        request(webAddressWeather, function(err, result) {

            var resultObject = JSON.parse(result.body);
            
            //var location = resultObject.timezone;
            //console.log(convertToCelsius(55));
            console.log("Current temperature today " + timeConverter(resultObject.currently.time) + " for " + resultObject.timezone+" : " + convertToCelsius(resultObject.currently.temperature) + " C");
            console.log("Conditions: " + resultObject.currently.summary);
            console.log("Long term forecast...");
            console.log(resultObject.daily.summary);
            console.log("5 day forecast details: ")
            for(var i=1;i<=5;i++) {
                var str = resultObject.daily.data[i];
                console.log(timeConverter(str.time)+":   "
                +"Sunrise: "
                +justTime(str.sunriseTime,resultObject.offset));
                
            }
            

            
        });
        });
});


function convertToCelsius (tempInFahrenheit) {
    return ((tempInFahrenheit-32)*.5556).toFixed(0);
}

function justTime(UNIX_timestamp,timezone){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours()+timezone;
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ':' + min + ':' + sec;
  return time;
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  //var hour = a.getHours();
  //var min = a.getMinutes();
  //var sec = a.getSeconds();
  var date = date + ' ' + month + ' ' + year;
  return date;
}