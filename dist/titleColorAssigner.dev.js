"use strict";

function titleColorAssigner(selector, colors) {
  var colorIndex = 0;
  document.querySelectorAll(selector).forEach(function (span) {
    span.style.background = colors[colorIndex];

    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  });
}

window.addEventListener("load", function () {
  titleColorAssigner("span.para-title", ["yellow", "aqua", "magenta"]);
  titleColorAssigner("h1", ["darksalmon", "burlywood", "chocolate"]);
});