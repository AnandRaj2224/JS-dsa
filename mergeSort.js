// learning merge sort

// .1 ---- STEP ONE IS TO LEARN HOW TO MERGE 2 SORTED ARRAYS. ----

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

// console.log(mergeArr([1,2,4,5],[3,6,7,8]))


// .2 ---- STEP TWO IS TO LEARN HOW TO RECURSIVELY BREAK ARRAYS INTO SMALLER ARRAYS. ----

function mergeSort(array) {

  if(array.length === 1 || array.length === 0 ) return array;
  let mid = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));
  return mergeArr(left,right);
}

console.log(mergeSort([1,2,4,5,9,11,17,26,27,3,6,7,8,25,24,23,12,10]));
