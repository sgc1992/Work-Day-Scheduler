var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
  // Use Moment.js to format
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

var saveButton = $('#button');

saveButton.on('click', function (event) {
  // Prevent default action
  event.preventDefault();
});
submitEl.addEventListener("click");

