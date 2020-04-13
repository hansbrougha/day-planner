var currentDay = [
  {
    order: "0",
    hour: "9",
    time: "9",
    meridiem: "AM",
    task: "",
  },
  {
    order: "1",
    hour: "10",
    time: "10",
    meridiem: "AM",
    task: "",
  },
  {
    order: "2",
    hour: "11",
    time: "11",
    meridiem: "AM",
    task: "",
  },
  {
    order: "3",
    hour: "12",
    time: "12",
    meridiem: "PM",
    task: "",
  },
  {
    order: "4",
    hour: "1",
    time: "1",
    meridiem: "PM",
    task: "",
  },
  {
    order: "5",
    hour: "2",
    time: "2",
    meridiem: "PM",
    task: "",
  },
  {
    order: "6",
    hour: "3",
    time: "3",
    meridiem: "PM",
    task: "",
  },
  {
    order: "7",
    hour: "4",
    time: "4",
    meridiem: "PM",
    task: "",
  },
  {
    order: "8",
    hour: "5",
    time: "5",
    meridiem: "PM",
    task: "",
  },
];
console.log(currentDay);

//Clock Element
var clock = document.getElementById("clock");
console.log(clock);
//Time Function
function updateTime() {
  var currentTime = moment();
  var displayFormat = currentTime.format("MMMM Do YYYY, h:mm:ss a");
  clock.textContent = displayFormat;
}
//Time Interval, updates every second.
setInterval(updateTime, 1000);
updateTime();
