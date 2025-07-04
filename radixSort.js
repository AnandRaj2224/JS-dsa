// learning radix sort

// ----.1 STEP ONE TO GET DIGITS AT THE PLACE VALUE ----.

function getDigit(num, postion) {
  return Math.trunc(num / Math.pow(10, postion)) % 10;
}

// ----.2 STEP TWO TO FIND LARGEST DIGIT ----.

function digitCount(num) {
  let count = 1;
  while (Math.abs(num) >= 10) {
    num /= 10;
    count++;
  }
  return count;
}

// ----.3 STEP three TO FIND LARGEST DIGIT among others ----.

function mostDigits(arr) {
  let maxdigits = 0;
  for (const v of arr) {
    maxdigits = Math.max(maxdigits, digitCount(v));
  }
  return maxdigits;
}

// ----- .4 now the radix sort ----

function radixSort(list) {
  let maxDigitsVal = mostDigits(list);

  for (let i = 0; i < maxDigitsVal; i++) {
    let digitsBuckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < list.length; k++) {
      let digitOrder = getDigit(list[k], i);
      digitsBuckets[digitOrder].push(list[k]);
    }
    list = [].concat(...digitsBuckets);
  }
  return list;
}

console.log(radixSort([2345552,234511,2312,1,22,333,9999]));
