/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    var splitString = s.split("");
    var newString = "x".repeat(indices.length).split('');

    for (let i = 0; i < splitString.length; i++) {
        // desired indices [4,5,6,7,0,2,1,3]
        let holdLetter = splitString[i];
        // put the letter in newString where indices wants
        newString[indices[i]] = splitString[i];
    }
    console.log(newString.join(""));
    return newString.join("");
};


restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);