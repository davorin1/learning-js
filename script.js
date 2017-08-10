// FUNCTIONS
function addTwoNumbers(a,b) {
  var result = a + b;
  // return exits the function
  return result;
}

// calculate & store returned values
/*
var yourVal = parseInt(prompt("Enter your value:"));
var x = addTwoNumbers(5,yourVal);
alert(x);
*/

// ITERATIONS
// Basic While loop
var amount = 0;
var i = 1;
while( i <= 10 ) {
  amount += 100;
  i++;
}
//alert("The value is: " + amount);

// For loop
for (var i = 1; i < 10; i++) {
  // do stuff
}

// Do.. While loop
var a = 1;
do {
  // your code
  a++;
} while ( a < 10 );


// ADDITION & CONCATENATION
var foo = "55";
var myNumber = Number(foo);
if(isNaN(myNumber)) {
  alert("It IS a number!");
}

// STRING METHODS
var phrase = "We want a groovy keywords";
//alert(phrase.toUpperCase());
var position = phrase.indexOf("groovy"); //returns 10
// it returns -1 if the term is not found
if (phrase.indexOf("DDDD") == -1) {
  //alert("That word does not occur.");
}
var segment = phrase.slice(6,11);

// REGULAR EXPRESSIONS

var myRE = new RegExp("hello");
// or
var myRE = /^hello/; // ^ at the start
var myRE2 = /hello$/; // $ at the end
var myRE3 = /hel+o/; // + once or more "helo","hello","hellllllo"
var mrRE4 = /hel*o/; // * zero or more "heo", "helo", "hellllllllo"
var myRE5 = /hel?o/; // ? zero or one "heo", "helo"
var myRE5 = /hello|goodby/; //either | or
var myRE6 = /he..o/; // .. any character
var myRE7 = /\wello/; // \w alphanumberic or _
var myRE8 = /\bhello/; // \b word boundary
var myRE9 = /[crnld]ope/; // either c, r, n, l or d
// ....
var myString = "Does this sentence have the word hello in it?";
if(myRE.test(myString)) {
  alert("Yes");
}


// ARRAYS
var myArray = [50,80,"Hello",true,99];
// alert(multiplevalues[2]);

// ARRAY METHODS
myArray.reverse(); // .sort(); .join();
var lastElement = myArray.pop(); // pop from end of array
myArray.push(123); // push to the end of array

// ITERATION THROUGH ARRAYS
var i = 0;
while( i < myArray.length ) {
  //alert("The value is: " + myArray[i]);
  i++;
}

var myNumbers = [500,50,20,30];
var total = 0;
for (var i = 0; i < myNumbers.length; i++) {
  total += myNumbers[i];
}
//alert("The total is: " + total);

// DOCUMENT OBJECT module
var headline = document.getElementById("mainHeading");

// EVENTS
headline.onclick = function() {
  headline.innerHTML = "Wow, a new JS headline";
};
