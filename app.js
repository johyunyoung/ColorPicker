const body = document.querySelector("body");
const textBox = document.querySelector(".js-colorBox");
const button = document.querySelector(".js-button");

function changeColor(){
    body.style.backgroundColor = setHex();
    textBox.innerHTML = setHex();
}

function setHex() {
    const hex = `#${pickColor()}${pickColor()}${pickColor()}${pickColor()}${pickColor()}${pickColor()}`;
    console.log(hex);
    return hex;
}

function pickColor() {
    const number = Math.ceil(Math.random() * 15);
    let result = "";
    if (number === 10) {
        result = "A";
    } else if(number === 11) {
        result = "B";
    } else if(number === 12) {
        result = "C";
    } else if(number === 13) {
        result = "D";
    } else if(number === 14) {
        result = "E";
    } else if(number === 15) {
        result = "F";
    } else {
        result = number.toString();
    }
    return result;
}

function init() {
    button.addEventListener("click", changeColor);
}

init();