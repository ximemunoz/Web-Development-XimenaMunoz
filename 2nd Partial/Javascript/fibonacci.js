
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
memo[1] = 1; //F1 = 1
memo[2] = 1; //F2 = 2
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = "Fibonacci is: " + val;
    window.alert(val)
    //return f;
}

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        for(var i = 3; i <= n; i++) {
            value = f(i-1) + f(i-2);
            console.log(value)
            //var item = document.createElement("li");
            //item.innerHTML = "Fibonacci is: " + value;
            //document.getElementById("fibonacciLbl2").appendChild(item);
            
          }
        memo[n] = value;
    }
    
    return value;
}
//console.log(fibonacci(15));
