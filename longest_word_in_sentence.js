// my solution
// function longestWordInSentence(sentence) {
//   let arrayOfWords = sentence.split(" ");
//   let longestWord = "";
//   let largest = 0;
//   // know the lenghts
//   for (let i = 0; i < arrayOfWords.length; i++) {
//     let word = arrayOfWords[i];
//     if (word.length > largest) {
//       largest = word.length;
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// Osama Solution
// function longestWordInSentence(sentence) {
//   let longestWord = sentence.split(" ").reduce(function (longest, current) {
//     return current.length > longest.length ? current : longest;
//   });
//   return longestWord;
// }

// Osama Solution Arrow Function
function longestWordInSentence(sentence) {
  let longestWord = sentence
    .split(" ")
    .reduce((l, c) => (c.length > l.length ? c : l));
  return longestWord;
}

console.log(
  longestWordInSentence(
    "in Programmming We Love Elzero Academy Tooooooooooo Much"
  )
); //Toooooooooooo
