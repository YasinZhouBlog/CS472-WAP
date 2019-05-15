console.log(EXERCISE);
let view = document.getElementById("AnimationViewer");
let animationSelect = document.getElementById("AnimationSelect");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let sizeSelect = document.getElementById("SizeSelect");
let checkbox = document.getElementById("checkbox");

animationSelect.onchange = animationChange;
startButton.onclick = startAnimation;
stopButton.onclick = stopAnimation;
sizeSelect.onchange = makeSize();
checkbox.onchange = changeSpeed;

let speed = 250;

let animation = (
    function () {
        function getSelect() {
            return animationSelect.options[animationSelect.selectedIndex].value;
        }

        function getString() {
            return ANIMATIONS[getSelect()];
        }
        return {
          value: function () {
              return getString().split("=====\n");
          }
        };
    }
)();


function animationChange() {
    stopAnimation();
    loadView();
}

function loadView() {
    view.innerHTML = animation.value()[0];
}

let interval;
function startAnimation() {
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(startTheAnimation, speed);
}
function stopAnimation() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearTheAnimation();
}

let px = 0;
function clearTheAnimation() {
    clearInterval(interval);
    px = 0;
}

function startTheAnimation() {
    if (!animation.value()[0]) {
        stopAnimation();
        return;
    }
    if (animation.value() && px < animation.value().length) {
        view.innerHTML = animation.value()[px++];
    } else {
        px = 0;
    }
}

function changeSize() {
    let size = sizeSelect.options[sizeSelect.selectedIndex].value;
    view.style.fontSize = size + "pt";
}

function makeSize(size) {
    return function f() {
        let size = sizeSelect.options[sizeSelect.selectedIndex].value;
        view.style.fontSize = size + "pt";
    };
}

function changeSpeed() {
    if (speed == 250) {
        speed = 50;
    } else {
        speed = 250;
    }
    stopAnimation();
    startAnimation();
}