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
3.Write a function that returns the factorial of a number.
 As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
*/

function fact(n) {
  if(n === 1) return 1;
  return n * fact(n-1);
}
// console.log(fact(5));

/* 
4.Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
*/
let arr = [1,2,3,4,5];
function all(arr, callback) {
   if(arr.length === 0) return true;

   if(!callback(arr[0])) return false;

   return all(arr.slice(1), callback);
}
function isGreaterThan10(num) {
  return num > 10;
}
// console.log(all(arr,isGreaterThan10));

/*
5.Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/
let i = arr.length-1;
function productOfArray(arr,i) {
  if(i === 0) return arr[i];
  return arr[i] * productOfArray(arr,i-1);
}

// console.log(productOfArray(arr,i));

/*
6.Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value.
*/
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(obj,target) {
  for(const key in obj) {
    if(!obj.hasOwnProperty) continue;

    const value = obj[key];

    if(value === target) return true;

    if(typeof(value) === 'object' && value != null ) {
     if(contains(value,target)) return true;
    }
  }
  return false;
}
// console.log(hasIt);
// console.log(doesntHaveIt);

/*
7.Given a multi-dimensional integer array, return the total number of integers stored inside this array
*/
const seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];

function totalIntegers(arr) {
  let count = 0;                      // ⬅ each call gets its own “count”
  for (const v of arr) {
    if (Array.isArray(v)) {
      // ⬅ dive into sub-array and add whatever it returns
      count += totalIntegers(v);
    }
    else if (typeof v === 'number') {
      // ⬅ found a number, bump this call’s count
      count += 1;
    }
    // non-number, non-array items (like strings) are skipped
  }
  return count;                       // ⬅ bubble up how many nums we saw
}

console.log(totalIntegers(seven));   // → 7
