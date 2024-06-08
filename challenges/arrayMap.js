// Challenge 1 function to check if array has contigious sub array sum
function arrayMap(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Shrink the window as long as currentSum is larger than target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start += 1;
    }

    // Check if the current sum equals the target
    if (currentSum === target) {
      return true;
    }
  }
  return false;
}

// Example
const arr = [4, 1, 7, 1, 9, 5];
const target = 14;
console.log(arrayMap(arr, target)); // true
