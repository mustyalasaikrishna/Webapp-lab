//Global variables
var prevCalc = 0;
var calc = "";

function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num--;
        document.frmCalc.txtNumber.value = num;
    }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

function Power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = num ** 2;
        document.frmCalc.txtNumber.value = num;
        calc = "Power2";
    }
}

function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "subtract";
    }
}

function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "multiply";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "divide";
    }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.sqrt(num);
        document.frmCalc.txtNumber.value = num;
    }
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.floor(num);
        document.frmCalc.txtNumber.value = num;
    }
}

function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!isNaN(num)) {
        var result = Math.round(num);
        document.frmCalc.txtNumber.value = result;
    }
}

function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        if (calc == "Add") {
            var total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "subtract") {
            var total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "multiply") {
            var total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Power") {
            var total = prevCalc ** num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "divide") {
            var total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Power2") {
            num = num ** 2;
            document.frmCalc.txtNumber.value = num;
        } else if (calc == "sqrt") {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
        } else if (calc == "floor") {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
        } else if (calc == "round") {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
        }
    }
}

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}
