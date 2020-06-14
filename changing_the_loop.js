/*for (let x = 9; x >= 1; --x){
  console.log("hello " + x);
}
for (let x = 5; x < 10; x++) {
  console.log(x);
}
for (var k = 0; k < 200; k++) {
  console.log(k);
}

let solution = 1;

for (let i =1; i <= 12; i++ ){
  solution *= i;
}
console.log(solution);*/
for (let row = 0; row < 26; ++row){

  for(let seat = 0; seat < 100; ++seat){

    console.log(row + "." + seat);
  }
  console.log("...");
}