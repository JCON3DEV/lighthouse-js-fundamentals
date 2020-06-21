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