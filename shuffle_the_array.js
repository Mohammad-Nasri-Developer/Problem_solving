/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let start = 0;
    let end = n;
    let newArray = [];
    while (end < nums.length) {
        newArray.push(nums[start]);
        newArray.push(nums[end]);

        start += 1;
        end += 1;
    }
    return newArray;
};