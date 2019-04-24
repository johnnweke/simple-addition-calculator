var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

// Have to add an event listener to get the values
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    //Creating another variable to convert the input from the field into a number
    //Adding  || 0 to create a fallback so we don't get a NaN value. Which means, it is 
    // the number or Zero
    var one = parseFloat (numOne.value) || 0;
    var two = parseFloat (numTwo.value) || 0;
    // var sum = one+two;
    // addSum.innerHTML = "Your Sum is: " + sum //This could also work.
    addSum.innerHTML = "Your Sum is: "+ (one+two);
}





// function addSum(){
//     return numOne + numTwo;
// }





// List of Javascript Events

// click
// mouseenter
// mouseleave
// mousedown (click down with out releasing)
// mouseup (up after a click)
// mousemove
// keydown
// Keyup
// blur
// focus