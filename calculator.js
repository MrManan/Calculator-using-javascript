var btn = document.getElementById('get-result');
btn.onclick = function() {
    var firstvalue = document.getElementById('first-value');
    var secondvalue = document.getElementById('second-value');
    var operator = document.getElementById('operator').value;
    if (operator === "+") {
        var result = document.getElementById("result");
        var r = parseInt(firstvalue.value) + parseInt(secondvalue.value);
        result.value = r;

    }
    if (operator === "-") {
        var result = document.getElementById("result");
        var r = parseInt(firstvalue.value) - parseInt(secondvalue.value);
        result.value = r;

    }
    if (operator === "*") {
        var result = document.getElementById("result");
        var r = parseInt(firstvalue.value) * parseInt(secondvalue.value);
        result.value = r;

    }
    if (operator === "/") {
        var result = document.getElementById("result");
        var r = parseFloat(firstvalue.value) / parseFloat(secondvalue.value);
        result.value = r;

    }
}