/*
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
*/

function add(x,y){
  return x + y;  
}

function divideByTwo(num){
  return num / 2;
}

var sum = add(5, 7); // 'sum' variable calls the "add" function and stores the returned value
var average = divideByTwo(sum); // The "average" variable calls the "divideByTwo" function and stores the returned value 
console.log(average);