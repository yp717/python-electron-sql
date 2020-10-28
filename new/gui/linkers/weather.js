let {PythonShell} = require('python-shell');
var path = require("path");
window.$ = window.jQuery = require("jquery");
var Tabulator = require('tabulator-tables');

// Makes an external API call to get some weather data
function get_weather() {
  var city = document.getElementById("city").value
  
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city]
  }

  let pyshell = new PythonShell('weather_engine.py', options);

  pyshell.on('message', function(message) {
    // the swal bit makes it come up as a popup
    swal(message);
  })
  document.getElementById("city").value = "";
}

// lists the weather data in the table on the page
function list_weather(){
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : []
  }

  // update the table with weather data
  let pyshell = new PythonShell('list_weather.py', options);
  pyshell.on('message', function(message) {
    var txt="<table id='weather-table' class='table table-striped table-hover'><thead><tr><th scope='col'>#</th><th scope='col'>City</th><th scope='col'>Weather Description</th> </tr></thead><tbody>"
    // Convert stringify-d JSON response to JSON Array
    var res = JSON.parse(message);
    console.log(res);
    for (i in res) {
      txt += "<tr><th scope='row'>" + res[i].id + "</th>"
      txt += "<td>" + res[i].city + "</td>";
      txt += "<td>" + res[i].response + "</td>";
      txt += "</tr>"
    }
    txt += "</table>"
    document.getElementById("weather-response").innerHTML = txt;
  })
}

// Once the page is ready make the table with id example-table a tabulator object
$(document).ready(function() {
  list_weather();
})