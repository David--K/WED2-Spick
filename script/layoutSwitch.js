window.addEventListener("load", () => {

  const LAYOUT_VIEW = "view";
  const LAYOUT_PRINT = "print";
  const LAYOUT_KEY = "data-layout";

  const targetElement = document.getElementsByTagName("body")[0];
  const layoutSwitch = document.getElementById("layoutSwitch");
  const burgerButton = document.getElementById("burgerMenu");
  const navBar = document.getElementsByClassName("navMenuWrapper")[0];

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
  })
  burgerButton.addEventListener("click", (e) => {
    let isDisplay = navBar.style.display === "block";
    navBar.style.display = isDisplay? "none" : "block";
    burgerButton.classList.toggle("change");
  })
})
