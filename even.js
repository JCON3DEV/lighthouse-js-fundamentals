const isEven = function(num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

// Or to simplifiy;
/* 
console.log(isEven(10));
console.log(isEven(11));

THIS SAVES HAVING TO STORE THEM AS VARIABLES
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
*/