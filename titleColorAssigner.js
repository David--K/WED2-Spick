function titleColorAssigner(selector, colors) {
  let colorIndex = 0;
  document.querySelectorAll(selector).forEach(function (span) {
    span.style.background = colors[colorIndex];
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  });
}

window.onload = () => {
  titleColorAssigner(".subtitle", ["yellow", "aqua", "magenta"]);
  titleColorAssigner("h1", ["darksalmon", "burlywood", "chocolate"]);
};
