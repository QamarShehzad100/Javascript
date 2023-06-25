// Array Operations
var arr = ["a", "b", "c", "d"];
arr.push("e"); // add at end
arr.pop(); // remove last
arr.unshift("-a"); //will add value in the begigning of array]
arr.shift(); // removes from begining
console.log(arr);

/// Functions

function myFunction() {
  var sum = 50 + 50;
  return sum;
  // remember if we don't return value of sum we can't assign function call to any variable outside
}
var result = myFunction();
alert(result);

// Garbage Collection
// => function's variables are not available outside the scope of the function
// => so whenever it's brackets close then no garbage outside of function's scope
// which os known as GARBAGE COLLECTION

// OBJECTS

var a = "";
var b = "";
var c = "";
var d = "";

var myObj = {
  a: "apple",
  b: "ball",
  c: "cat",
  func: function () {
    alert("this is obj function");
  },
};

console.log(myObj.c);

$("box").fadeOut(); // Jquery function not working

// Fadeout function now using Javascript // but not working

var result = document.getElementById("exDiv");
var result2 = document.getElementById("exDiv2");
var result3 = document.getElementById("img");

function fadeOut(elem, speed) {
  if (!elem.style.opacity) {
    elem.style.opacity = 1;
  }
  setInterval(function () // built in setInterval function
  {
    elem.style.opacity -= 0.02;
  }, speed / 50);
}
fadeOut(img, 1000);

// Alertnatively

// var result = document.getElementById("exDiv");
// result.style.opacity = 0;
// setTimeout(function() {
//   result.style.display = 'none';
// }, 1000);
