
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
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
            num =num**2;
            document.frmCalc.txtNumber.value = num;
            calc = "Power2";
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}
function Power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Power";
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
            num = Math.sqrt(num)
            document.frmCalc.txtNumber.value = num;
            
        }
}
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num)
            document.frmCalc.txtNumber.value = num;
            
        }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!isNaN(num)) {
            prevCalc=num;
            var result  = Math.round(num)
            document.frmCalc.txtNumber.value = result;
            
        }
}


//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "multiply"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Power"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }
           
            

            else if (calc == "divide"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Power2"){
                num =num**2;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "sqrt"){
                num = Math.sqrt(num)
                document.frmCalc.txtNumber.value = total;
            }

            else if (calc == "floor"){
                num = Math.floor(num)
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "round"){
                num = Math.round(num)
                document.frmCalc.txtNumber.value = total;
            }
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}