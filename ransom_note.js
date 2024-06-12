/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


var canConstruct = function (ransomNote, magazine) {
    let listRansomNoteLetters = ransomNote.split("");
    let listMagazineLetters = magazine.split("");

    // letter from ransomNote should exist in magazine & then delete once
    for (let letter of listRansomNoteLetters) {
        if (!listMagazineLetters.includes(letter)) {
            // does not contain the letter
            return false;
        } else {
            // exist, remove the first occurrence of the letter
            let index = listMagazineLetters.indexOf(letter);
            listMagazineLetters.splice(index, 1);
        }
    }

    return true;
};

// canConstruct("a", "aab"); // false
canConstruct("aa", "ab"); // false
// canConstruct("aa", "aab"); // true
