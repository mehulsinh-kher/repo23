let display = document.getElementById("display");
let buttons = document.querySelectorAll("button")

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ""
}

function calculateResult() {
    if (display.value === "") {
        alert("Please enter a valid expression");
    } else {
        let result = eval(display.value);
        display.value = result;
    }
}

function Displayback() {
    display.value = display.value.slice(0, -1)
}
