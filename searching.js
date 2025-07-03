// my implementation of linear search

function linearSearch (value,target) {
  for(let i = 0; i <=value.length-1; i++) {

    if(value[i] === target) {
      return i; 
    }
  }
   return -1;
}

// console.log(linearSearch([1,1,1,1,22,2,3,4,5,5,5],22));

// my implementation of binary search

function binarySearch (value,target) {

  let left = 0;
  let right = value.length-1;

  while (left <= right) {

    let mid = Math.floor((left+right/2));

    if(value[mid] === target) {
      return mid;
    }

    if(value[mid] > target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }

  return -1;
}

// console.log(binarySearch([2,3,4,5,6,7,8],5));


// my implementation of naive string search

function stringSearch (str1,str2) {

  for(let i = 0; i <= str1.length - str2.length; i++) {
    let flag = true;
    for(let j = 0; j < str2.length; j++) {
      if(str1[i+j] !== str2[j]) {
        flag = false;
        break;
      }
    }
   if(flag) return true;
  }
  return false;
}

console.log(stringSearch("anandraj","andrn"));