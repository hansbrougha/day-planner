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
    task: "2 pm task info",
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
    time: "17",
    meridiem: "PM",
    task: "",
  },
];
console.log(currentDay);

//Saves User Data in Local Storage

//Shows User Data for each hour

currentDay.forEach(function (currentHour) {
  //console.log(currentHour);
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

  //Creates New Text Area for User Data. Doesn't Seem to Work.
  //Need specific identifier
  var taskInfo = $("<textarea>");
  taskInfo.attr({ class: "col-6 description" });
  taskInfo.attr("task", currentHour.task);
  taskInfo.attr("id", "input" + currentHour.time);
  console.log(currentHour.task);

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
  } else if (currentHour.time > moment().format("HH")) {
    taskInfo.attr({
      class: "future",
    });
  }
  // Save Button
  var saveButton = $("<span class='ui-icon-disk'></span>");
  var saveTask = $("<button>").attr({
    class: "col-1 saveBtn",
  });
  //Appends saveButton to newRow
  saveTask.append(saveButton);
  newRow.append(newRow, timeSlot, taskInfo, saveTask);
});
//====================================
//Click Event needs to save input from text area (task)
//When we click the button, we need a unique identifier on each textarea
$(".saveBtn").click(function (event) {
  event.preventDefault();
  console.log(event);
});
//Check all inputs based off their id and see if the values appear in html elements using inspector
//event listener is going to be applied to every single button
//try and figure out a way to capture your values.
//you will need to reference .val somewhere in your code.
