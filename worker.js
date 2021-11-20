var seconds = 0;

var interval = setInterval(onInterval, 1000);

/**
 * Posts worker mesage on every second.
 */
function onInterval() {
  seconds += 1;
  postMessage(formatTime(seconds));
}

/**
 * Formats time.
 *
 * @param {number} seconds
 * @return {string}
 */
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return leftPad(minutes) + ':' + leftPad(seconds);
}

/**
 * Pads 0 to the string.
 *
 * @param {number} digit
 * @return {string}
 */
function leftPad(digit) {
  return String(digit).padStart(2, '0');
}
