window.addEventListener("load", () => {
    let navMenuPlaceholder = document.getElementById('navMenuPlaceholder');

    let h1Tags = document.querySelectorAll(".page > h1");

    for (let i = 0; i < h1Tags.length; i++) {
        let h1Text = h1Tags[i].innerText;
        let anchorId = `${i}_${h1Text}`;


        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = `#${anchorId}`;
        a.innerText = h1Text;
        li.appendChild(a);
        navMenuPlaceholder.appendChild(li);

        h1Tags[i].innerHTML += `<a id="${anchorId}"></a>`;
    }
});
