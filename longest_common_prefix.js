/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 0) return "";

    let prefix = strs[0]; // Initialize prefix with the first string

    for (let i = 1; i < strs.length; i++) {

        let currentWord = strs[i];
        // Compare characters of the current word with the prefix
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== currentWord[j]) {
                prefix = prefix.substring(0, j);
                break;
            }
        }
    }


    console.log(prefix);
    return prefix;
};


longestCommonPrefix(["dog", "racecar", "car"]);