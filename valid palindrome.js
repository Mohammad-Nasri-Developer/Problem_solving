/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Split string into an array of characters
    let letters = s.split("");
    let strRegex = new RegExp(/^[a-z0-9]+$/i);  // Regex to check for alphanumeric characters

    // Clean the string by converting to lowercase and removing non-alphanumeric characters
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].toLowerCase(); // Convert to lowercase

        let isAlphanumeric = strRegex.test(letters[i]);
        if (!isAlphanumeric) {
            letters.splice(i, 1);  // Remove non-alphanumeric characters
            i--;  // Decrement index to account for the splice
        }
    }

    // Join the cleaned letters into a string
    let cleanedWord = letters.join("");

    // Reverse the cleaned word
    let reversedWord = cleanedWord.split("").reverse().join("");

    // Return true if the cleaned word is equal to its reverse
    return cleanedWord === reversedWord;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Output: true
