var button = document.getElementById("submit");
var input = document.getElementById("email");
var ul = document.querySelector("ul")

function displayWhatIsInput() {
    // console.log(input.value);
    if (input.value.length > 0 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}

function autoComplete(event) {
    if (event.keyCode === 13) {
        displayWhatIsInput();
    }
}

button.addEventListener("click", displayWhatIsInput);

input.addEventListener("keypress", autoComplete)