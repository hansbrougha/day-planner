//Clock Element
var clock = document.getElementById("clock");
//Time Function
function updateTime() {
  var currentTime = moment();
  var displayFormat = currentTime.format("MMMM Do YYYY, h:mm:ss a");
  clock.textContent = displayFormat;
}
//Time Interval, updates every second.
setInterval(updateTime, 1000);
updateTime();
