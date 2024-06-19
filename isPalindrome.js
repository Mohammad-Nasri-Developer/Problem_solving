/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome_ApproachOne = function (x) {
//     if (x < 0) {
//         console.log("false");
//         return false;
//     }
//     var sliced = x.toString().split("").reverse().join('');
//     var parced = parseInt(sliced);
//     if (parced === x) {
//         console.log("true");
//         return true;
//     }
//     console.log("false");
//     return false;
// };

var isPalindrome_ApproachTwo = function (x) {

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        // if negative, or last digit is 0 and not 0 itself so false
        return false;
    }
    let reversed = 0;
}

isPalindrome_ApproachTwo(122)

// isPalindrome_ApproachOne(121);
// isPalindrome_ApproachOne(-121);
isPalindrome_ApproachOne(10);