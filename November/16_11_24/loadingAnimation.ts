var circle1 = document.getElementById('1');
var circle2 = document.getElementById('2');
var circle3 = document.getElementById('3');
var circle4 = document.getElementById('4');
var circle5 = document.getElementById('5');
var toggle: boolean = false;
var circle: HTMLElement | null;
function controlAnimation() {
    console.log("Hi");

    toggle = !toggle;
    if (toggle) {
        for (let i = 1; i < 6; i++) {
            circle = document.getElementById(i.toString());
            circle?.classList.remove('stop');
            circle?.classList.add('start');
        }
    }
    else {
        for (let i = 1; i < 6; i++) {
            circle = document.getElementById(i.toString());
            circle?.classList.remove('start');
            circle?.classList.add('stop');
        }
    }
}