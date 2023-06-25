var anchTag = document.getElementsById("anchor");
var divOne = document.getElementById("boxOne");

divOne.addEventListener("click", newFunc, false);

function newFunc() {
  alert("div Clicked");
}

anchTag.addEventListener("click", exfunc, false);
function exfunc() {
  alert("Clicked");
}
