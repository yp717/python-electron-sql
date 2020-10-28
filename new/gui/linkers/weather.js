let {PythonShell} = require('python-shell')
var path = require("path")


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

function list_weather(){
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : []
  }

  // update the table with weather data
  let pyshell = new PythonShell('list_weather.py', options);
  pyshell.on('message', function(message) {
    document.getElementById('weather-table').simple_datagrid(
    {
      data: message
    });
    console.log(message);
  })
}