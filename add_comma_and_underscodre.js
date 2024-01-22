function addCommasAndUnderscore(ginvenNumber) {
  // 7 or 8 or 9 characters put underscore after third number from the right, and comma thfer the 6th from the right
  // 4 or 5 or 6 characters put underscore after third number from the right
  // 3 characters do not put anything.

  let nums = ginvenNumber.toLocaleString();

  return nums;
  for (i = 0; i < nums.length; i++) {
    //3
    console.log("-----");
    // console.log(nums);

    if (nums.length <= 3) {
      return nums[i];
    }

    // 4,5,6
    // 7,8,9
  }
}

// console.log(addCommasAndUnderscore(120)); // 120
// console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
// console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
// console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
