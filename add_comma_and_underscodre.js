// My Solution

// function addCommasAndUnderscore(ginvenNumber) {
//   // 7 or 8 or 9 characters put underscore after third number from the right, and comma thfer the 6th from the right
//   // 4 or 5 or 6 characters put underscore after third number from the right
//   // 3 characters do not put anything.

//   let result = ginvenNumber.toLocaleString();

//   // convert To Array
//   result = result.split("");

//   // return result;s
//   if (result.length <= 3) {
//     let number = result.join("");
//     return number;
//   }

//   /////////////
//   if (result.length > 3 && result.length < 7) {
//     //3
//     console.log("--3<hhh");
//     console.log(result);

//     result.splice(1, 1, "_");

//     return result.join("");
//   }

//   /////////////

//   if (result.length > 3 && result.length >= 7) {
//     // 7,8,9
//     // result[result.length -4] = "_";
//     result.splice(result.length - 4, 1, "_");

//     return result.join("");
//   }
// }

// OSAMA Solution
function addCommasAndUnderscore(num) {
  // Convert To String
  let result = num.toLocaleString(); // Try Another Solution With RegExp
  // Convert To Array
  result = result.split("");
  // Update The Last Comma Value
  result[result.length - 4] = "_";
  // Convert To String
  result = result.join("");
  return result;
}
// Try Another Solution With RegExp

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
