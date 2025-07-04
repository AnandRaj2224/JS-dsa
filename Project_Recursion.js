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

 // console.log(recursiveFibo(8));



 // merge sort

function mergeArr(arr1,arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
    while( i < arr1.length && j < arr2.length) {
      if(arr1[i] > arr2[j]) {
        mergedArr.push(arr2[j]);
        j++;
      } else {
        mergedArr.push(arr1[i]);
        i++;
      }
    }

    while(i < arr1.length) {
      mergedArr.push(arr1[i]);
      i++;
    }

    while(j < arr2.length) {
      mergedArr.push(arr2[j]);
      j++;
    }

  return mergedArr;
}

function mergeSort(array) {

  if(array.length === 1 || array.length === 0 ) return array;
  let mid = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));
  return mergeArr(left,right);
}

console.log(mergeSort([1,2,4,5,9,11,17,26,27,3,6,7,8,25,24,23,12,10]));
