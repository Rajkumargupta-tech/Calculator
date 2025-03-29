let result = document.getElementById("Result");

function calValue(value) {
    result.value += value; 
}

function clearScreen() {
    result.value = ""; 
}

function calResult() {
    try {
        result.value = eval(result.value); 
    } catch {
        result.value = "Error";
    }
}
 