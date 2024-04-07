function findMissingLetterIn(givenLetter) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  // we should start by the letter that the person gave first.
  let start = alpha.indexOf(givenLetter[0]);

  for (let i = 0; i < givenLetter.length; i++) {
    // console.log(givenLetter[i]); // loop on given letters
    // console.log(alpha[start + i]); // loop on alpha
    // console.log("#######");

    if (givenLetter[i] !== alpha[start + i]) {
      return alpha[start + i];
    }
  }
  return "No Missing Letter In Sequence";
}

console.log(findMissingLetterIn("defgi")); // h
console.log(findMissingLetterIn("abcdeghi")); // f
console.log(findMissingLetterIn("xyz")); // NO Missing Letter
