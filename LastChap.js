var nameArr = ["Jhon", "David", "Aron", "Jhon", "David", "Aron"];

var uniqe = function (origArray) {
  var newArr = [],
    found,
    origLength = origArray.length,
    i,
    j;

  for (var i = 0; i < origLength; i++) {
    found = false;
    for (var j = 0; j < newArr.length; j++) {
      if (origArray[i] == newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr.push(origArray[i]);
    }
  }
  return newArr;
};
nameArr = uniqe(nameArr);
console.log(nameArr);
