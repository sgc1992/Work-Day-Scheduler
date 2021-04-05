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
  var key = $('#hour9');
var value = $('.descrption');
localStorage.setItem(key,value)
})
