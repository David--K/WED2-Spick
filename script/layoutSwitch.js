window.addEventListener("load", () => {

  const LAYOUT_VIEW = "view";
  const LAYOUT_PRINT = "print";
  const LAYOUT_KEY = "data-layout";

  let targetElement = document.getElementsByTagName("body")[0];
  let layoutSwitch = document.getElementById("layoutSwitch");

  function setLayout(cssTag) {
    localStorage.setItem(LAYOUT_KEY, cssTag);
    targetElement.setAttribute(LAYOUT_KEY, cssTag);
    layoutSwitch.checked = cssTag === LAYOUT_VIEW;
  }

  if (localStorage.getItem(LAYOUT_KEY) !== undefined) {
    setLayout(localStorage.getItem(LAYOUT_KEY));
  }

  layoutSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
      setLayout(LAYOUT_VIEW);
    } else {
      setLayout(LAYOUT_PRINT);
    }
  });

  let currentLayout = localStorage.getItem(LAYOUT_KEY);
  window.addEventListener("beforeprint", function(event) {
    currentLayout = localStorage.getItem(LAYOUT_KEY);
    setLayout(LAYOUT_PRINT);
  });

  window.addEventListener("afterprint", function(event) {
    setLayout(currentLayout);
  });
});