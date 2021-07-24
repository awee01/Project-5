

//get current date
var currentDay = moment().format("dddd, MMMM Do");

//display current date
document.getElementById("currentDay").innerHTML = currentDay;

$(document).ready(function () {

//save button
$(".saveBtn").on("click", function () {

  // get values
  var text = $(this).siblings(".text-input").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);

  })


  $(".deleteBtn").on("click", function () {

    $("text1").empty();
  })

function time() {

  // current time
  var currentTime = moment().hour();


  $(".time-block").each(function () {
    var scheduledTime = parseInt($(this).attr("id").split("hour")[1]);

    // check to see if scheduled time is equal to current time
    if (scheduledTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (scheduledTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
      }
      else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

      }
    })
  }

  // Retrieving saved items from local storage
  $("#hour9 .text-input").val(localStorage.getItem("hour9"));
  $("#hour10 .text-input").val(localStorage.getItem("hour10"));
  $("#hour11 .text-input").val(localStorage.getItem("hour11"));
  $("#hour12 .text-input").val(localStorage.getItem("hour12"));
  $("#hour13 .text-input").val(localStorage.getItem("hour13"));
  $("#hour14 .text-input").val(localStorage.getItem("hour14"));
  $("#hour15 .text-input").val(localStorage.getItem("hour15"));
  $("#hour16 .text-input").val(localStorage.getItem("hour16"));
  $("#hour17 .text-input").val(localStorage.getItem("hour17"));

  time();
})