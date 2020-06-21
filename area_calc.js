
function calculateTriangleArea(base, height){
  if (base > 0 && height > 0) {
    let triangleArea = base * (height / 2);
    return triangleArea;
  }
  else {
    return undefined //"positive values are required";
  }
}//end of function

function calculateRectangleArea(length, width){
  if(length > 0 && width > 0){
    let rectangleArea = (length * width);
    return rectangleArea;
  }
  else {
    return undefined //"positive values are required";
  }
}//end of function

function calculateCircleArea(radius){
  if(radius > 0){
    let circleArea = Math.PI * (radius * radius);
    return Math.floor(circleArea);
  }
  else {
    return undefined //"positive values are required";
  }
}//end of function

console.log(calculateRectangleArea(3,5));
console.log(calculateRectangleArea(-1, 0));
console.log(calculateTriangleArea(6, 12));
console.log(calculateCircleArea(3.5));
