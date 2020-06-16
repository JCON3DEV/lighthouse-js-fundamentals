const sayHelloToConsole = function (name){
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

const returnSayHello = function(name){
  return "Hello, " + name;  
}

const greeting = returnSayHello("Jake");

// to be reused below;
console.log(greeting);
console.log(greeting);
