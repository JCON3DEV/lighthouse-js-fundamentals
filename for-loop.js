/*const items = ["tv", "stereo", "oven", "computer", "matress"];

for(i = 0; i < items.length; i += 1){
  console.log(i + "." + items[i]);
}*/

let input = "turpentine and turtles’";//"whubbadubdub";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

//below code associates an iteration with each character of the input string
for (i = 0; i < input.length; i++) {
  
  //below code associates an iteration with each element of the vowel array
  for(j = 0; j < vowels.length; j ++){
    
    //## Below is to to compare input letters to vowels array
    /* Because this is nested inside the internal for loop - 
    it will check all the vowels for the first letter of the string, 
    then check all the voweles for the second and so on. */
    if (input[i] === vowels[j]){
      //resultArray.push(vowels[j]);
      

      //below adds the whale song by boubling the "e" in the results
      if(input[i]=== "e" ){
        resultArray.push("ee");                
      } 
      //below adds the whale song by boubling the "u" in the results
      else if (input[i] === "u") {
        resultArray.push("uu");
      }
      //Below adds the other vowels to the results array as normal
      else {
        resultArray.push(input[i]);
      }          
      
    }
  }
}
//Tidy results using .join() and .toUpperCase();
/*resultArray.join("")
resultArray.toUpperCase;

//Publish the results  ### Why does this not display the saem way?
console.log(resultArray);
*/
//Or write in one line;
console.log(resultArray.join("").toUpperCase());