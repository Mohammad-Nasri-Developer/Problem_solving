// my Solution

// function convert(n) {
//   s = n.toString();
//   let listOfStrings = s.split("");
//   let revesed = listOfStrings.reverse();
//   for (let index = 0; index < revesed.length; index++) {
//     const element = revesed[index];

//     revesed[index] = parseInt(element);
//   }
//   return revesed;
// }

// Osama Sulotion
// function convert(n) {
//   // convert to String
//   let str = n.toString();

//   // convert to Array
//   let arr = str.split("");

//   // convert All Element To Number
//   arr = arr.map((x) => +x);
//   //   arr.map((x) => parseInt(x));  // Same As above one

//   // Reverse The Array
//   arr = arr.reverse();
//   return arr;
// }

// Osama Sulotion One Line
function convert(n) {
  return n
    .toString()
    .split("")
    .map((x) => +x)
    .reverse();
}

console.log(convert(564987654)); //[4,5,6,7,8,9,4,6,5]
console.log(convert(529132)); //[2,3,1,9,2,5]
