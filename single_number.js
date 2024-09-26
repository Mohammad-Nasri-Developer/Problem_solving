/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let appearedOnce = 0; // because n ^ 0 = n

    for (let i = 0; i < nums.length; i++) {
        appearedOnce = appearedOnce ^ nums[i]; // XOR operation
    }
    return appearedOnce;
};
