/*const chorus = "Let's dance!";
let repeat = 0;


while (repeat < 10) {
  console.log(chorus);
  repeat++;
}

/* 
====== Same outcome written in a for loop
for (let repeat = 0; repeat < 10; ++repeat){
  console.log(chorus);
}

console.log("Until the sun comes up!"); 
*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
