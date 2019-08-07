function submitComment () {
    // gather data
    let inputField = document.getElementById("name");
    let name = inputField.value;
    let textArea = document.getElementById("msg");
    let msg = textArea.value;

    // create elements to hold the data
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // make the elements hold the data
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    // display the elements on the page
    let commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);

    // reset the values of the input fields
    inputField.value = null;
    textArea.value = null;
}

