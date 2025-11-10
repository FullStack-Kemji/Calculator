const everything = document.querySelectorAll("*");
const display = document.getElementById("display");
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator")
const operators = document.querySelector(".operator-btn")
const button = document.querySelectorAll("#keys button");

function appendToDisplay(balls) {
    display.value += balls;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {

    try {
        display.value = eval(display.value);

    } catch {
        display.value = "error";
    }

}

function darkMode() {

    body.style.backgroundColor = "#2a2a2a";
    calculator.style.backgroundColor = "rgb(31, 31, 31)";

    button.forEach(btn => {

        btn.style.backgroundColor = "#121212";
        btn.style.color = "white";

    })
    display.style.backgroundColor = "#121212"
    display.style.color = "white";

}

function lightMode() {
    body.style.backgroundColor = "#BFBFBF";
    calculator.style.backgroundColor = "#D1D1D1";
    display.style.backgroundColor = "#cbcbcb"
    display.style.color = "black"

    button.forEach(btn => {
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
    })   
}

function currentMode() {
    everything.forEach( evr => {
        evr.removeAttribute("style");
    })
}