let countdown = 60;

while (countdown >= 0){
  if (countdown === 50){
    console.log("Orbiter transfers from ground to internal power \(T\-minus 50 seconds\)");
  }
  else if(countdown === 31){
    console.log("Ground launch sequencer is go for auto sequence start \(T\-31 seconds\)");
  }
  else if (countdown === 16){
    console.log("Activate launch pad sound suppression system \(T\-16 seconds\)");
  }
  else if (countdown === 10){
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
  }
  else if (countdown === 6) {
    console.log("Main engine start (T-6 seconds)");    
  }
  else if (countdown === 0) {
    console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
    break;
  }
  else {
    console.log("T-" + countdown + "seconds");
  }
  countdown -= 1;
};
//countdown = countdown - 1;