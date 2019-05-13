function showAlerts() {
    alert("Hello, world!");
}
function largerText() {
    let textArea = document.getElementsByTagName("textarea")[0];
    let size = parseInt(getComputedStyle(textArea).fontSize);
    size += 2;
    textArea.style.fontSize = size + 'px';
}
function boldText() {
    let checkBox = document.getElementById("CheckBox");
    let textArea = document.getElementById("TextArea");
    let body = document.getElementsByTagName("body")[0];
    if (checkBox.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses" +
            "/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function click() {
    setInterval(largerText, 500);
}

document.getElementById("BiggerButton").onclick = click;
document.getElementById("CheckBox").onchange = boldText;