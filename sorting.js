// my implementation of bubble sort 

function swap(arr,index1,index2) {

  [arr[index1],arr[index2]] = [arr[index2],arr[index1]] 
}

function bubbleSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for(let j = 1; j < arr.length-i; j++) {
      if(arr[j-1] > arr[j]) {

        swap(arr,j-1,j);
        noSwap = false;
      }
    }
      if(noSwap) break;
  }
  return arr;
}

// console.log(bubbleSort([4,2,1,7,5,6]));


// my implementation of selection sort 

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let smallest = i;
    for(let j = 1+i; j < arr.length; j++) {
      if(arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    swap(arr,i,smallest);
  }
  return arr;
}

// console.log(selectionSort([4,2,1,3,5,6]));
