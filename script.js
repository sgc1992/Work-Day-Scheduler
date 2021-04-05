var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
  // Use Moment.js to format
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$("#button").on("click", function () {
  // Get nearby values of the description in JQuery
  var key = $(this).siblings('#hour9').val();
  var value = $(this).parent().attr('#text');
  localStorage.setItem(key, value)
})
$("#hour9 .description").val(localStorage.getItem("hour"));