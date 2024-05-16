// function for button to calculations
function calculate() {
    let res = "";
    // Getting the value of inputs by its class.
    let num1 = document.getElementsByClassName("num1")[0].value;
    let num2 = document.getElementsByClassName("num2")[0].value;
    let operator = document.getElementsByClassName("operate")[0].value;
    //for Addition (+) 
    if (operator == "+") {
        res = Number(num1) + Number(num2);
    }
    // for Subtraction (-)
    if (operator == "-") {
        res = Number(num1) - Number(num2);
    }
    // for Multiplication (*)
    if (operator == "*") {
        res = Number(num1) * Number(num2);
    }
    // for Division (/)
    if (operator == "/") {
        res = Number(num1) / Number(num2);
    }
    // for Modulus
    if (operator == "%") {
        res = Number(num1) % Number(num2);
    }

    // value of the res will be updated/as a output on Answer input
    document.getElementsByClassName("result")[0].value = res;
}

// Code to clear the output result if changes occur in input or by select.

// function to clear the output
function clears() {
    document.getElementsByClassName("result")[0].value = "";
}
// Call a function clears() when the user presses a key:
document.getElementsByClassName("num1")[0].onkeydown = () => { clears() };
document.getElementsByClassName("num2")[0].onkeydown = function () { clears() };
// Call a function clears() when changes the selected option of a <select> element:
document.getElementsByClassName("operate")[0].onchange = () => { clears() };
// reset fields
const reset = () => {
    document.getElementsByClassName("num1")[0].value = "";
    document.getElementsByClassName("num2")[0].value = "";
    document.getElementsByClassName("operate")[0].value = "Select Operator";
    document.getElementsByClassName("result")[0].value = "";
}


/* =============== Code for discount calculation ================= */

// function for button to discount calculations
const discount = () => {
    let res = "";
    // Getting the value of inputs by its class.
    const price = document.getElementsByClassName("price")[0].value;
    const discount = document.getElementsByClassName("discount")[0].value;
    //for Addition (+) 
    res = Number(price) - (Number(price) * Number(discount) / 100);
    // value of the res will be updated/as a output on Answer input
    document.getElementsByClassName("afterDiscounted")[0].value = res;
    document.getElementsByClassName("discounted")[0].value = Number(price) - res;
}

// function to clear the outputs
function clear() {
    document.getElementsByClassName("afterDiscounted")[0].value = "";
    document.getElementsByClassName("discounted")[0].value = "";
}

// Code to clear the output result if changes occur in input when the user presses a key.
document.getElementsByClassName("price")[0].onkeydown = () => { clear() };
document.getElementsByClassName("discount")[0].onkeydown = () => { clear() };

// reset fields
const reset2 = () => {
    document.getElementsByClassName("price")[0].value = "";
    document.getElementsByClassName("discount")[0].value = "";
    document.getElementsByClassName("afterDiscounted")[0].value = "";
    document.getElementsByClassName("discounted")[0].value = "";
};
