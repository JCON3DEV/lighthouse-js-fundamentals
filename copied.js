const moves = ["north", "north", "west", "west", "north", "east", "north"]
function finalPosition(moves) {
  let start = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === “north”) {
      start[1] += 1;
    }else if (moves[i] ===“south”) {
      start[1] -= 1;
    }else if (moves[i] === “east”) {
      start[0] += 1;
    }else if (moves[i] ===“west”) {
      start[0] -= 1;
    }    
  }
  return start;
}

console.log(finalPosition(moves));