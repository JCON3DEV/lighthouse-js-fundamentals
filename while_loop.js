var x = 1;

while (x <= 100) {

    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    }
    
    else if (x % 3 === 0){
        console.log("Julia");
    }
    
    else if(x % 5 === 0){
        console.log("James");
    }
    
    else {
        console.log(x);
    }
    x = (x + 1)
    }