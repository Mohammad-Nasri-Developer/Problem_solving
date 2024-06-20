/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let carry = 1;

    // iterate from the last
    for (let i = digits.length - 1; i >= 0; i--) {
        //[9, 9]
        // i = 9
        digits[i] += carry;
        // i = 10
        if (digits[i] === 10) {
            // i = 10
            digits[i] = 0;
            carry = 1;
            // [9,0]
            // [0,0]
        } else {
            carry = 0;
            break;
        }
    }
    if (carry === 1) {
        // finish loop and still 1 carried
        digits.unshift(1); // add 1 to the front of the list
    }
    console.log(digits);
    return digits;
};


plusOne([1, 2, 9]);