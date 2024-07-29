/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Stack to keep track of opening parentheses
    let stack = [];

    // Hash map to keep track of mappings. This provides a fast lookup for the corresponding opening parenthesis for each closing one.
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    // 1- if current was closing, check there should be opening
    // 2- if there is no match return false and finish
    // 3-  if current is opening push it into stack


    for (const c of s) {
        if (c in map) {   // closing
            if (stack.length !== 0 && stack[stack.length - 1] === map[c]) {
                stack.pop(); // correct, so delete it
            } else {
                // not correct so return false
                return false;
            }
        } else { // opening
            stack.push(c)
        }


    }
    return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true