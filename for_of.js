const iterable = [10, 20, 30];

function filter(num){

  for (const value of iterable) {

    const capacity = iterable[1];

    if (iterable[1] >= 20){
      console.log("success")
      return ("location has a capacity of " + iterable[1]);      
    }
    else {
      console.log("Theres not enough space");
    }
  }
  

}

console.log(filter());
// 10
// 20
// 30