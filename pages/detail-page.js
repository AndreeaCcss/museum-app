function submitComment () {
    let inputField = document.getElementById("name");
    let name = inputField.value;
    console.log(name)

    let textArea = document.getElementById("msg");
    let msg = textArea.value;
    console.log(msg)

    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)

}

