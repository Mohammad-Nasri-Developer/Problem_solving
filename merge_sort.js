function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the middle index
    const leftHalf = arr.slice(0, mid); // Split the array into two halves
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and push the smaller one into the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Push remaining elements from left and right arrays (if any)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
