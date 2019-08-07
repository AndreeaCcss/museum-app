let inappropriateWords = ["bananas", "balanas", "bamanas"];

function submitComment () {
    // gather data
    let inputField = document.getElementById("name");
    let name = inputField.value;
    let textArea = document.getElementById("msg");
    let msg = textArea.value;

    // validation logic
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (doesNotPassAllValidations(name, msg)) {
        return null;
    } 
    
    // create elements to hold the data
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // make the elements hold the data
    h3.textContent = `${name} said:`;
    p.textContent = msg;
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

function doesNotPassAllValidations (name, msg) { 
    if (containsInappropriateWords(msg)) {
        return true;
    }
    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    } else if(!msg) {
        alert('You forgot to fill in your message!');
        return true;
    } else if (msg.length > 280 ) {
        alert("Message can't be longer than 280 characters");
        return true;
    } else {
        return false;
    }
}

function containsInappropriateWords (msg) {
    msg = msg.toLowerCase().split(" ");
    for(i=0; i<inappropriateWords.length; i++){
        for(l=0; l<msg.length; l++) {
            if(inappropriateWords[i] === msg[l]) {
                alert("Warning: this comment has been flagged as offensive.");
                return true;
            }
        }
    }
}