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