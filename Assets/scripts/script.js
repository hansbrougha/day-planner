//Clock Element
var clock = document.getElementById("clock");
//Time Function
function updateTime() {
  var currentTime = moment();
  var displayFormat = currentTime.format("MMMM Do YYYY, h:mm:ss a");
  $("#clock").text(displayFormat);
}
//Time Interval, updates every second.
setInterval(updateTime, 1000);

var currentDay = [
  {
    hour: "9:00",
    time: "09",
    meridiem: "AM",
    task: "",
  },
  {
    hour: "10:00",
    time: "10",
    meridiem: "AM",
    task: "",
  },
  {
    hour: "11:00",
    time: "11",
    meridiem: "AM",
    task: "",
  },
  {
    hour: "12:00",
    time: "12",
    meridiem: "PM",
    task: "",
  },
  {
    hour: "1:00",
    time: "13",
    meridiem: "PM",
    task: "",
  },
  {
    hour: "2:00",
    time: "14",
    meridiem: "PM",
    task: "",
  },
  {
    hour: "3:00",
    time: "15",
    meridiem: "PM",
    task: "",
  },
  {
    hour: "4:00",
    time: "16",
    meridiem: "PM",
    task: "",
  },
  {
    hour: "5:00",
    time: "",
    meridiem: "PM",
    task: "",
  },
];
console.log(currentDay);

currentDay.forEach(function (currentHour) {
  //Creates New Row, Appends to container
  var newRow = $("<form>").attr({
    class: "row time-block",
  });
  $(".container").append(newRow);
  //Creates New Div for Time Slot
  var timeSlot = $("<div>")
    .text(`${currentHour.hour}${currentHour.meridiem}`)
    .attr({
      class: "col-1 hour",
    });
  //Creates New Div, Adds class of description
  var taskArea = $("<div>").attr({
    class: "col-6 description",
  });
  //Creates New Text Area for User Data
  var taskInfo = $("<textarea>");
  taskArea.append(taskInfo);
  taskInfo.attr("task", currentHour.task);
  //Adds Class Past to Text Area when time slot has passed
  if (currentHour.time < moment().format("HH")) {
    taskInfo.attr({
      class: "past",
    });
    //If current hour, use class present
  } else if (currentHour.time === moment().format("HH")) {
    taskInfo.attr({
      class: "present",
    });
    //Class of future for upcoming tasks
  } else if (currentHour.time === moment().format("HH")) {
    taskInfo.attr({
      class: "future",
    });
  }
});
