//get current date
var currentDay = moment().format("dddd, MMMM Do");

//display current date
document.getElementById("currentDay").innerHTML = currentDay;

//save button
$(".saveBtn").on("click", function () {

  // get values
  var recordedInput = $(this).siblings(".text-input").val();
  var recordedTime = $(this).parent().attr("id");
  localStorage.setItem(recordedTime, recordedInput);

})

// Retrieving saved items from local storage

function retrieveSavedItems() {

  bh = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

  for (bhindex = 0; bhindex < 9; bhindex++) {

    $("#" + bh[bhindex] + " .text-input").val(localStorage.getItem(bh[bhindex]));

  }
}

//execute save function
retrieveSavedItems();

// Delete Button
$(".deleteBtn").on("click", function () {

  var recordedTime = $(this).parent().attr("id");

  localStorage.removeItem(recordedTime);

  $(this).siblings(".text-input").val("");

})


//defining function to compare colors
function timeComparison() {

  // current time
  var currentTime = moment().hour();


  $(".time-block").each(function () {
    var scheduledTime = parseInt($(this).attr("id"));

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
