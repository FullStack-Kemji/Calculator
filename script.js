
// assign all things to be styled later in the project
const everything = document.querySelectorAll("*");
const display = document.getElementById("display");
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const operators = document.querySelector(".operator-btn")
const button = document.querySelectorAll("#keys button");


// calculator functionality
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
// styling based on active color mode

    // dark mode

    function darkMode() {

    body.style.backgroundColor = "#2a2a2a";
    calculator.style.backgroundColor = "rgb(31, 31, 31)";
    display.style.backgroundColor = "#121212";
    display.style.color = "white";

    button.forEach(btn => {
        if (btn.classList.contains("operator-btn")) {
            
            btn.style.backgroundColor = "black"
            btn.style.color = "white"

            btn.addEventListener("mouseenter", () => {
                btn.style.color = "#1A1A1A"
            })

            btn.addEventListener("mouseleave", () => {
                btn.style.color = "white"
            })


        } else {
            btn.style.backgroundColor = "#1A1A1A"
            btn.style.color = "black"

            btn.addEventListener("mouseenter", () => {
                btn.style.color = "white"
                btn.style.backgroundColor = "#1C1C1C"
            })

            btn.addEventListener("mouseleave", () => {
                btn.style.color = "black"
                btn.style.backgroundColor = "#1A1A1A"
            })

        }
    })

}

    // light mode

function lightMode() {
    body.style.backgroundColor = "#BFBFBF";
    calculator.style.backgroundColor = "#D1D1D1";
    display.style.backgroundColor = "#cbcbcb";
    display.style.color = "black";

        button.forEach(btn => {
        if (btn.classList.contains("operator-btn")) {
            btn.style.backgroundColor = "#F0F0F0";
            btn.style.color = "black"

            btn.addEventListener("mouseenter", () => {
                btn.style.backgroundColor = "#E0E0E0"
            }) 

            btn.addEventListener("mouseleave", () => {
                btn.style.backgroundColor = "white"
            })

        } else {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";

            btn.addEventListener("mouseenter", () => {
                btn.style.backgroundColor = "#F2F2F2"
                btn.style.color = "gray"
            }) 

            btn.addEventListener("mouseleave", () => {
                btn.style.backgroundColor = "white"
                btn.style.color = "black"
            })
        }
    
    })
}

function blueMode() {

    body.style.backgroundColor = "#93C5FD";
    calculator.style.backgroundColor = "#0A192F";
    display.style.backgroundColor = "#2563EB";
    display.style.color = "#E6F0FF"
    
    button.forEach(btn => {
        if (btn.classList.contains("operator-btn")) {
            btn.style.backgroundColor = "#112240";
            btn.style.color = "#E6F0FF"

            btn.addEventListener("mouseenter", () => {
                btn.style.backgroundColor = "#0F1B33"
            }) 

            btn.addEventListener("mouseleave", () => {
                btn.style.backgroundColor = "#112240"
            })

        } else {
            btn.style.backgroundColor = "#2563EB";
            btn.style.color = "#E6F0FF";

            btn.addEventListener("mouseenter", () => {
                btn.style.backgroundColor = "#1B3A7C"
            }) 

            btn.addEventListener("mouseleave", () => {
                btn.style.backgroundColor = "#2563EB"
                btn.style.color = "#E6F0FF"
            })
        }
    
    })



}

    // reset to purple theme

    function purpleMode() {
    everything.forEach(el => el.removeAttribute("style")); // clear previous styles

    // Body
    body.style.backgroundColor = "#E6CCFF";

    // Calculator
    calculator.style.backgroundColor = "rgb(73, 2, 73)";

    // Display
    display.style.backgroundColor = "orchid";
    display.style.color = "pink";

    // Buttons
    button.forEach(btn => {
        if (btn.classList.contains("operator-btn")) {
            btn.style.backgroundColor = "darkorchid";
            btn.style.color = "orchid";

            // Hover effect
            btn.onmouseenter = () => btn.style.backgroundColor = "purple";
            btn.onmouseleave = () => btn.style.backgroundColor = "darkorchid";

        } else {
            btn.style.backgroundColor = "orchid";
            btn.style.color = "pink";

            // Hover effect
            btn.onmouseenter = () => btn.style.backgroundColor = "darkorchid";
            btn.onmouseleave = () => btn.style.backgroundColor = "orchid";
        }
    });
}
