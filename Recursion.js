/* 
1.Write a function called sumRange. It will take a number and return the 
sum of all numbers from 1 up to the number passed in.
*/
function sumRange (n) {
  if(n === 1) return 1;
  return n + sumRange(n-1);
}
// console.log(sumRange(3));

/*
2.Write a function called power which takes in a base and an exponent.
If the exponent is 0, return 1.
*/
function power(base,expo) {
  if(expo === 0) return 1;
  return base * power(base,expo-1);
}
// console.log(power(2,3));

/*
Write a function that returns the factorial of a number.
 As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
*/

function fact(n) {
  if(n === 1) return 1;
  return n * fact(n-1);
}
// console.log(fact(5));