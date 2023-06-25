console.log("This is console log");
document.write("write on page javascript");
var name = "qamar";
alert(name);
winnerTeam = "pakistan"; // global variable

var a = 11;
var b = 15;

function multiplyNumbers() {
  var c = a * b;
  return c;
}

console.log(multiplyNumbers());

function DeclareName(name) {
  console.log("Hello" + name);
}

DeclareName("qamar");

// DOM (Document Object Model)
var headi = document.getElementById("heading3");
console.log(headi.innerHTML);
var divVal = document.getElementsByClassName("mydiv");
console.log(divVal);
document.getElementsByTagName("h3")[0].innerHTML = "Chanaged from client side"; // changed innerHTML of h3 using javascript
console.log(heading3);

// Changing CSS using Javascript
document.getElementById("heading3").style.color = "red";
document.getElementById("heading3").style.backgroundColor = "green";

// variable scope

//variables can be used within functions not outside
// just global variables can be defined outside the scope of function

// variables are loosly coupled
// variables are case sensitive

// if statement

var num = 20;

if (num === 10) {
  alert("both are equal");
} else {
  alert("not same");
}

if (num !== 20) {
  //not equal !== sign
  alert("Yes not equal");
} else {
  alert("both are same");
}

// Premtive data types

var myStr = "this is string";
alert(myStr.toLocaleUpperCase());
alert(myStr.substring("is"));

// Native Functions/Build in functions

var func = parseFloat("25px"); // to get number out of the given string
alert(func);

var encodeURL = encodeURIComponent("https://moneypex.com/pk");
console.log(encodeURL);

var decodeURL = decodeURIComponent("https%3A%2F%2Fmoneypex.com%2Fpk");
console.log(decodeURL);

// Ternary Operator

var num2 = 12;
num2 = num2 === 12 ? Yes : NO;
console.log(num2);

// for loop

for (var i = 0; i < 10; i++) {
  document.writeln(i);
}

Arrays;

arr = [1, 2, 4, 5, 7, 9];

for (let k = 0; k < arr.length; k++) {
  document.writeln(arr[k]);
}

// while loop

let a = 0;
while (a < 10) {
  console.log();
  a++;
}

// methods of string

var myString = "what is your name";
var splittedStr = myString.split(" ");
console.log(splittedStr);
