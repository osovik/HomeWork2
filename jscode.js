function calculate() {
    let input1 = document.getElementById('number1').value;
    let input2 = document.getElementById('number2').value;
    let input3 = document.getElementById('action').value;
    let result;

    if (input3 === "subtraction") {
        result = subtraction(input1, input2);
    } else if (input3 === "multiplication") {
        result = multiplication(input1, input2);
    } else if (input3 === "division") {
        result = division(input1, input2);
    } else if (input3 === "addition") {
        result = addition(input1, input2);
    } else {
        result = "UNKNOWN COMMAND";
    }
    document.getElementById('answer').innerHTML = result;
}

function subtraction(a, b) {
    return Number(a) - Number(b);
}

function addition(a, b) {
    return Number(a) + Number(b);
}

function division(a, b) {
    return Number(a) / Number(b);
}

function multiplication(a, b) {
    return Number(a) * Number(b);
}



