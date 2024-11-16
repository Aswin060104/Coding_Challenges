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
