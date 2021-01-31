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

function initStyleSettingsManagement() {
  let h1ColorPicker = document.getElementById('h1Colors');
  let h1AddColor = document.getElementById('addh1Color');
  let h1ColorlistPlaceholder = document.getElementById('h1ColorlistPlaceholder');

  let h2ColorPicker = document.getElementById('h2Colors');
  let h2AddColor = document.getElementById('addh2Color');
  let h2ColorlistPlaceholder = document.getElementById('h2ColorlistPlaceholder');

  function displayColorList(key, defaultVal, placeholder) {
    placeholder.innerHTML = '';
    let list = getColorList(key, defaultVal);
    list.forEach(function (color) {
      let div = document.createElement('div');
      div.style.background = color;
      div.className = "color-selection";
      let span = document.createElement('span');
      span.textContent = color;
      div.addEventListener('click', function (e) {
        let laterList = getColorList(key, defaultVal);
        let newList = laterList.filter(function (value, index, arr) {
          return value != color;
        });
        setColorList(key, newList);
        displayColorList(key, defaultVal, placeholder);
        setColors();
      });

      div.appendChild(span);
      placeholder.appendChild(div);
    });
  }

  function manageColorList(key, defaultVal, picker, add, list) {
    add.addEventListener('click', function (e) {
      let value = picker.value;
      appendColorList(key, defaultVal, value);
      displayColorList(key, defaultVal, list);
      setColors();
    });
    displayColorList(key, defaultVal, list);
  }

  manageColorList(H1_LIST_KEY, H1_DEFAULT_LIST, h1ColorPicker, h1AddColor, h1ColorlistPlaceholder);
  manageColorList(H2_LIST_KEY, H2_DEFAULT_LIST, h2ColorPicker, h2AddColor, h2ColorlistPlaceholder);

  let applyButton = document.getElementById('applyStyleSettings');
  applyButton.addEventListener('click', (e) => {
    setColors();
  });

  let resetButton = document.getElementById('resetStyleSettings');
  resetButton.addEventListener('click', (e) => {
    setColorList(H1_LIST_KEY, H1_DEFAULT_LIST);
    setColorList(H2_LIST_KEY, H2_DEFAULT_LIST);

    displayColorList(H1_LIST_KEY, H1_DEFAULT_LIST, h1ColorlistPlaceholder);
    displayColorList(H2_LIST_KEY, H2_DEFAULT_LIST, h2ColorlistPlaceholder);

    setColors();
  });
}

function setColors() {
  titleColorAssigner("h1", getColorList(H1_LIST_KEY, H1_DEFAULT_LIST));
  titleColorAssigner("span.para-title", getColorList(H2_LIST_KEY, H2_DEFAULT_LIST));
}

const H1_LIST_KEY = 'H1_LIST';
const H1_DEFAULT_LIST = ["darksalmon", "burlywood", "chocolate"];

const H2_LIST_KEY = 'H2_LIST';
const H2_DEFAULT_LIST = ["yellow", "aqua", "magenta"];

function appendColorList(key, defaultVal, value) {
  let currentList = getColorList(key, defaultVal);
  currentList.push(value);
  setColorList(key, currentList);
}

function setColorList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getColorList(key, defaultVal) {
  if (localStorage.getItem(key) == undefined) {
    localStorage.setItem(key, JSON.stringify(defaultVal));
  }

  return JSON.parse(localStorage.getItem(key));
}

function getColorListFlat(key, defaultVal) {
  return getColorList(key, defaultVal).join(';');
}

window.addEventListener("load", () => {
  initStyleSettingsManagement();
  setColors();
});