let pic = document.getElementById("pic");

document.addEventListener("mouseover", (event) => {
  moveThing(event)
});

function moveThing(event) {
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    pic.style.left = xPosition + "px";
    pic.style.top = yPosition + "px";
}


window.addEventListener("keypress", changeColor);
let body = document.body

function changeColor(event) {
    if (event.key === "1"){
        body.style.background = "aqua";
    } else if (event.key === "2") {
        body.style.background = "teal";
    } else {
        body.style.background = "aquamarine";
    }
}


word.addEventListener('click', (event) => {
  doSomething(event);
});
function doSomething(event) {
  var word = document.getElementById("word");
  word.innerHTML = "You Found Me!";
}
