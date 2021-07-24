//get current date
var currentDay = moment().format("dddd, MMMM Do");

//display current date
document.getElementById("currentDay").innerHTML = currentDay;

//save button
$(".saveBtn").on("click", function () {

  // get values
  var recordedInput = $(this).siblings(".text-input").val();
  var recordedTime = $(this).parent().attr("id");
  localStorage.setItem (recordedTime, recordedInput);

})

// Retrieving saved items from local storage
$("#9 .text-input").val(localStorage.getItem("9"));
$("#10 .text-input").val(localStorage.getItem("10"));
$("#11 .text-input").val(localStorage.getItem("11"));
$("#12 .text-input").val(localStorage.getItem("12"));
$("#13 .text-input").val(localStorage.getItem("13"));
$("#14 .text-input").val(localStorage.getItem("14"));
$("#15 .text-input").val(localStorage.getItem("15"));
$("#16 .text-input").val(localStorage.getItem("16"));
$("#17 .text-input").val(localStorage.getItem("17"));


//defining function to compare colors
function timeComparison() {

  // current time
  var currentTime = moment().hour();


  $(".time-block").each(function () {
    var scheduledTime =parseInt($(this).attr("id"));

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


  // Execute time function
  timeComparison();
