/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity O(n)
// var searchInsert = function (nums, target) {
//
//     if (nums[nums.length - 1] < target) {
//         return ((nums.length - 1) + 1)
//     }
//
//     for (let i = 0; i < nums.length; i++) {
//
//
//         if (nums[i] === target) {
//             return i;
//         }
//         else {
//             if (nums[i] > target) {
//                 // target = 2
//                 return i;
//             }
//
//         }
//
//     }
// };

// Time Complexity O(log n)
var searchInsert = function (nums, target) {

    if (nums[nums.length - 1] < target) {
        return ((nums.length - 1) + 1)
    }

    for (let i = 0; i < nums.length; i++) {


        if (nums[i] === target) {
            return i;
        }
        else {
            if (nums[i] > target) {
                // target = 2
                return i;
            }

        }

    }
};