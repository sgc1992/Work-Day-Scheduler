var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
  // Use Moment.js to format
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
})