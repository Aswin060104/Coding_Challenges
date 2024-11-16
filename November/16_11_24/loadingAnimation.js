var circle1 = document.getElementById('1');
var circle2 = document.getElementById('2');
var circle3 = document.getElementById('3');
var circle4 = document.getElementById('4');
var circle5 = document.getElementById('5');
var toggle = false;
var circle;
function controlAnimation() {
    console.log("Hi");
    toggle = !toggle;
    if (toggle) {
        for (var i = 1; i < 6; i++) {
            circle = document.getElementById(i.toString());
            circle === null || circle === void 0 ? void 0 : circle.classList.remove('stop');
            circle === null || circle === void 0 ? void 0 : circle.classList.add('start');
        }
    }
    else {
        for (var i = 1; i < 6; i++) {
            circle = document.getElementById(i.toString());
            circle === null || circle === void 0 ? void 0 : circle.classList.remove('start');
            circle === null || circle === void 0 ? void 0 : circle.classList.add('stop');
        }
    }
}
