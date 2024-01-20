// function removeCharacterFromString(word, characterToRemove) {
//   ///------- Solution 1
//
//   let letters = word.split("");
//   let newString = "";
//   for (let index = 0; index < letters.length; index++) {
//     if (
//       letters[index] !== characterToRemove.toLowerCase() &&
//       letters[index] !== characterToRemove.toUpperCase()
//     ) {
//       newString = newString + letters[index];
//     }
//   }
//
//   return newString;
// }

///------- Solution 2

function removeCharacterFromString(word, characterToRemove) {
  return word
    .split("")
    .filter(
      (x) =>
        x !== characterToRemove.toLowerCase() &&
        x !== characterToRemove.toUpperCase()
    )
    .join("");
}

console.log(removeCharacterFromString("ElddzeroD WebDD ddSchool", "d"));
console.log(removeCharacterFromString("ElxzeroX Web Sxchool", "x"));
console.log(removeCharacterFromString("Elzero@ Web@@ @@School", "@"));
