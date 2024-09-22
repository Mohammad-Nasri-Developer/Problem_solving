/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let total_sum = nums.reduce((a, b) => a + b, 0);
    let left_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = total_sum - left_sum - nums[i];

        if (left_sum === rightSum) {
            // when they are equal this is the middle index
            return i;
        }
        left_sum += nums[i];
    }
    return -1; // no middle index

};