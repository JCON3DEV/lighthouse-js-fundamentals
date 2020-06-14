//The below code counts to 4
for (var x = 0; x < 5; x = x + 1) {
  
  // THe nested for loop below counts to 2 for each iteration of the code above
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
/*Prints
0,0
0,1
0,2
1,0
1,1
1,2
2,0
2,1
2,2
3,0
3,1
3,2
4,0
4,1
4,2
*/