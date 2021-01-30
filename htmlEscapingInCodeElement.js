window.onload = () => {
  const codeElements = document.querySelectorAll("code.escapeHtml");
  for (let i = 0; i < codeElements.length; i++) {
    codeElements[i].innerHTML = Prism.highlight(codeElements[i].innerHTML, Prism.languages.html, 'html');
  codeElements[i].parentElement.style.backgroundColor = "#f5f2f0";
  }
}
