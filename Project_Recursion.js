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

console.log(iterativeFibo(8));