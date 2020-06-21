function range(start, end, step) {
  let results = [];

  if (start === undefined || end === undefined || step === undefined) {
    return results;
  }

  else if (step === 0 || step < 0) {
    console.log("Increment cannot be zero. inbcrement must be positive value"); // Added comments for better readabbility
    return results;
  }

  else if (start > end) {
    console.log("Starting value cannot be higher than ending value"); // Added comments for better readabbility
    return results;
  }


  else if ((end - step) > start) {
    results.push(start);

    let i = 1;
    while (i <= (end - start) / step) {
      results.push(start + (step * i));
      i++;
    }

  }//end of if truth loop  

  return results;

}// end of range function

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

// Evaluation conditions;
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
