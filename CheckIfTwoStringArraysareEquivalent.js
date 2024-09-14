/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {

    let allLettersOne = word1.join("");
    let allLettersTwo = word2.join("");

    if (allLettersOne === allLettersTwo) {
        return true;
    } else {
        return false;
    }
}

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);