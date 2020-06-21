const stations = [
  /*
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
  */
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school']
  
];

function chooseStations(votingBooth){
  
  let goodStations = [];

  for (const index of stations){
    
    const capacity = index[1];
    
    if (capacity >= 20) {
      
      const venue = index[2];
      
      if (venue === 'school' || venue == 'community centre'){
        goodStations.push(index[0]);
      }

    }
   
  }
  return goodStations;
    
}

console.log(chooseStations());