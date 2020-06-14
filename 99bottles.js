var num = 99;

while(num >= 1){
  // 
  if (num > 1) {
    console.log(num + "bottles of jusice on the wall!" + num + 
    "bottles of juice! Take one down, pass it around..." + (num-1) + 
    "bottles of juice on the wall!);
  } 
  else if (num === 1) {
    console.log (num + "bottle of juice on the wall! 1 bottle of juice!" 
    "Take one down, pass it around... 0 bottles of juice on the wall!);
  }
  else {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  } 
  num = num - 1;
};

/*var num = 99;

while (num >= 1) {
  // Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! "
      + num + " bottle of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  // Second-last iteration. Note occurances of bottleS, bottleS, bottle
  else if (num === 2) {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottle of juice on the wall!");
  }
  // All other iterations. Note occurances of bottleS, bottleS, bottleS
  else {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  num = num - 1;
} */