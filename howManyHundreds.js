function howManyHundreds(num){
  
  let counter = (num / 100);  

  if (counter >= 1){
    return Math.floor(counter);
    
  }
  else {
    return Math.floor(counter); //"No crates are full";    
  }  
  
}


console.log(howManyHundreds(1000))   //Should print 10
console.log(howManyHundreds(894))   //Should print  8
console.log(howManyHundreds(520))   //Should print  5
console.log(howManyHundreds(99))   //Should print  0
console.log(howManyHundreds(0))   //Should print 
/* num % 100 === 0 */