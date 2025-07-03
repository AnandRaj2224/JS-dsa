// my implementation of linear search

function linearSearch (value,target) {
  for(let i = 0; i <=value.length-1; i++) {

    if(value[i] === target) {
      return i; 
    }
  }
   return -1;
}

console.log(linearSearch([1,1,1,1,22,2,3,4,5,5,5],22));