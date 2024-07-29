/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var num = 0;
    for (let i = 0; i < s.length; i++) {
        let currentRomanNum = romanValues[s[i]];
        let nextRomanNum = romanValues[s[i + 1]];

        console.log(currentRomanNum);
        console.log(nextRomanNum);

        if (nextRomanNum > currentRomanNum) {
            num -= currentRomanNum; // Subtract
        } else {
            num += currentRomanNum; // Add
        }
    }
    console.log(num);
    return num;
};


romanToInt("IX");