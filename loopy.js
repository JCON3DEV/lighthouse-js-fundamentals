let loopy = 100;
while (loopy < 201){
  
  if (loopy % 3 === 0 && loopy % 4 === 0){
    console.log("LoopyLighthouse");
    loopy++;    
  }

  else if (loopy % 3 === 0){
    console.log("Loopy");    
    loopy++;    
  }
  
  else if (loopy % 4 === 0){
    console.log("Lighthouse");    
    loopy++;    
  }  
  else{
    console.log(loopy);
    loopy++;    
  }
  
}