// Build a function mergeSort that takes in an array and returns 
// a sorted array, using a recursive merge sort methodology.

/* Pseudocode */
// on input of n elements
//  if n < 2
//    return
//  else
//    sort left half of elements
//    sort right half of elements
//    merge sorted halves.

let arr = [4, 8, 6, 2, 1, 7, 5, 3];

function mergeSort (arr) {
  if (arr.length < 2){
    return arr;
  } else {
    const HALFWAY = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, HALFWAY)) // cut in half recursively until hitting the base case
    let rightHalf = mergeSort(arr.slice((HALFWAY), arr.length)); // same as above but for the first "right" half.
    return mergeHalves(leftHalf, rightHalf);
  }
  
}

console.log(`Original array: ${arr}`)
console.log(`mergeSort(arr): ${mergeSort(arr)}`);
console.log(`Try it yourself... call mergeSort() and pass in an [array]`)

function mergeHalves (leftHalf, rightHalf) {
  let sortedArray = [];

  while (leftHalf.length > 0 && rightHalf.length > 0) {
    if (leftHalf[0] < rightHalf[0] ?
      sortedArray.push(leftHalf.shift()) :
      sortedArray.push(rightHalf.shift()));
  }
  return sortedArray.concat(leftHalf, rightHalf);
}