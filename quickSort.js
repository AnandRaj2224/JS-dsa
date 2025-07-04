// learning quick sort

function swap(arr,index1,index2) {

  [arr[index1],arr[index2]] = [arr[index2],arr[index1]] 
}

// ---- .1 STEP ONE IS TO CREATE THE PIVOT HELPER AND FOR SWAPING.

function pivotHelper(arr,startIdx,endIdx) {
  let pivot = arr[startIdx];
  let swapIdx = startIdx;
  for(let i = startIdx+1; i <= endIdx; i++) {
    if(pivot > arr[i]) {
       swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,startIdx,swapIdx);
  return swapIdx;
}
// ---- .2 STEP TWO IS TO FIND PIVOT FOR THE GIVEN ARRAY AND THEN USE IT TO SORT THE SUB-ARRAYS CREATED.
function quickSort(arr,left = 0, right = arr.length-1) {

  if(left < right) {
    let pivotIndex = pivotHelper(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
  }
  return arr;
}

console.log(quickSort([5,3,4,1,2,7,6]));
