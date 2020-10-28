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
    swal(message);
  })
  document.getElementById("city").value = "";
}

function list_weather(){
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : []
  }

  let pyshell = new PythonShell('list_weather.py', options);
  pyshell.on('message', function(message) {
    swal(message);
  })
}
list_weather()