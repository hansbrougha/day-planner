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

$(document).ready((clock) => {
  $(".saveBtn").on("click", () => {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  //Time Function
  function updateTime() {
    var currentHour = moment().hours("MMMM Do YYYY, h:mm:ss a");
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  updateTime();
  // set up interval to check if current time needs to be updated
  var interval = setInterval(updateTime, 15000);

  //load data from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $("#clock").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});
