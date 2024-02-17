function bubbleSort(arr) {
  // Outer loop to iterate through all elements
  for (let i = 0; i < arr.length; i++) {
    // inner loop for comparisopn and swaping
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // so left is begger than right, lets swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Return the sorted array
  return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 2, 1, 4];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
