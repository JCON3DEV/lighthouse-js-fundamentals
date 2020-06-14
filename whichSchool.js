const whichSchool = function(age) {
  
  if (age <= 13){
    console.log("Elementary School");
  }
  
  else if(age >= 14 && age <= 18){
    console.log("Secondary School");
  }
  
  else {
    console.log("Lighthouse Labs");
  }
};

console.log("I am 18. Which school should I go to?");
whichSchool(18);
