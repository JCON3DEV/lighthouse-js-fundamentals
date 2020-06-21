let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
//console.log(moves.length);

const finalPosition = function(moves){
  
  
  let coordinates = [0,0];  
  
  for (let i = 0; i < moves.length; i++) {  
    //console.log("loop is a go");  

    if (moves[i] === 'north') {
      coordinates[1] = coordinates[1] + 1;  
      //console.log('north condition');    
    }

    else if (moves[i] === 'east') {
      coordinates[0] = coordinates[0] + 1;
      //console.log('east condition');      
    }

    else if (moves[i] === 'south') {
      coordinates[1] = coordinates[1] - 1;
      //console.log('south condition');      
    }

    else if (moves[i] === 'west') {
      coordinates[0] = coordinates[0] - 1; 
      //console.log('west condition');      
    }
  };//End of for loop
  
  return coordinates;
  
} 

console.log(finalPosition(moves));

//console.log('index: ', i);