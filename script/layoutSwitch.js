window.addEventListener("load", () => {
  document.getElementById("layoutSwitch").addEventListener("change", (e) => {
    if(e.target.checked){
      document.getElementsByTagName("body")[0].setAttribute("layout", "view")
    }else{
      document.getElementsByTagName("body")[0].setAttribute("layout", "print")
    }
  })
})
