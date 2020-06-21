const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/*

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

*/
//Practice with a while statement to loop through an array;

console.log("Kitchen stuff to pack:");

let i = 0;
while (i< packingList.length){
  console.log(packingList[i]);
  i++;
}

console.log("And then in reverse; \n.");

//Practice reverse looping through arrays;
for (i = packingList.length -1; i >= 0; i--){
  console.log(packingList[i]);
}

/*
let i = packingList.length -1;

while (i >= 0){
  console.log(packingList[i]);
  i--;
}
*/