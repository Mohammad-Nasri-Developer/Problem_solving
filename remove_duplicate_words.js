// function removeDuplicateWords(sentence) {
//   let wordList = sentence.split(" ");
//   let result = [];
//   for (let i = 0; i < wordList.length; i++) {
//     if (result.indexOf(wordList[i]) === -1) {
//       // Not Exist
//       result.push(wordList[i]);
//     }
//   }

//   return result.join(" ");
// }

// same but using Set
// function removeDuplicateWords(sentence) {
//   let wordList = sentence.split(" ");
//   let wordsSet = new Set(wordList);
//   let arrayFromSet = [...wordsSet];

//   // let arrayFromSet = Array.from(wordsSet); // this the same as above

//   return arrayFromSet.join(" ");
// }

// One Line using Set
function removeDuplicateWords(sentence) {
  return [...new Set(sentence.split(" "))].join(" ");
}

console.log(removeDuplicateWords("Hello Elzero Web Web Hello School")); //Hello Elzero Web Web Hello School
