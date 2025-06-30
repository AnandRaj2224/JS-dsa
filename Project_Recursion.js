// iterative approach 

function iterativeFibo (num) {
  let fiboArray = [0,1,1];
  let i = 3;
  while(i < num) {
    let fiboValue = fiboArray[i-1] + fiboArray[i-2];
    fiboArray.push(fiboValue);
    i++;
  }
  return fiboArray;
}

// console.log(iterativeFibo(8));

// recursive approach
function recursiveFibo(num) {
  if(num === 1) return [0,1];

  let arr = recursiveFibo(num-1);

  let next = arr[arr.length-1] + arr[arr.length-2];
  arr.push(next);

  return arr;
}

console.log(recursiveFibo(8));