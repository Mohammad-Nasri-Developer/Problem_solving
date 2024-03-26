function mergeSort(arr) {

    // check if already sorted or has no elements
    if (arr.length <= 1) {
        return arr;
    }

    const mid =  Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // merge the sorted values
    // This is Helper Function to merge sorted arrays
    return merge(sortedLeft, sortedRight);
}

function merge(rightArr, leftArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and push the smaller one into the result
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Push remaining elements from left and right arrays (if any)
    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}


// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
