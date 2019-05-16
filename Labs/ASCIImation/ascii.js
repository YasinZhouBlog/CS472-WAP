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
    console.log(animation.value().length);
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

var a = {
    name: "free",
    major: "music",
    smallest: function (a, b) {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        } else {
            return Math.sqrt(a);
        }
    }
}

function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
}

var e1 = new Employee("name1", 1000, "position1");
var e2 = new Employee("name2", 1500, "position2");
var e3 = new Employee("name3", 1300, "position3");

function f() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}

var f1 = (a,b,c) => {
    return Math.max(a,b,c);
}
