/* Prior to requestAnimation the following code was used:
const squareELement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareELement.style.transform = `rotate(${angle}deg)`
}, 1000, 60);
*/

//Now the following code is used when animating in JavaScript:
/*
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
*/