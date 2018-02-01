console.log("JS TEST");


function calculator() {
    let theBase = document.getElementById("theBase").value;

    if (document.getElementById("frToC").checked) {
        let celOutput = ((theBase - 32) * 0.5556);
        document.getElementById("outputBase").innerHTML = (celOutput + "&#8451");
        console.log("GOOD 1");
        if (celOutput > 32) {
            document.getElementById("outputBase").style.color = "red";
        } else if (celOutput < 0) {
            document.getElementById("outputBase").style.color = "blue";
        } else {
            document.getElementById("outputBase").style.color = "green";
        }
    }

    if (document.getElementById("cToFr").checked) {
        let farOutput = ((theBase * 1.8) + 32);
        document.getElementById("outputBase").innerHTML = (farOutput + "&#8457");
        console.log("GOOD 2");
        if (farOutput > 90) {
            document.getElementById("outputBase").style.color = "red";
        } else if (farOutput < 32) {
            document.getElementById("outputBase").style.color = "blue";
        } else {
            document.getElementById("outputBase").style.color = "green";
        }
    }
}

function enterCalculator() {
    if (event.which === 13 || event.keyCode == 13) {
        calculator();
    }
}

let btnConvert = document.getElementById("btnConvert").addEventListener("click", calculator);
addEventListener("keypress", enterCalculator);

function clear() {
    document.getElementById("theBase").value = "";
    document.getElementById("outputBase").innerHTML = "";
}

let btnClear = document.getElementById("btnClear").addEventListener("click", clear);