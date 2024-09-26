/**
 * @param {string} n
 * @return {number}
 */
function minPartitions(n) {
    let maxDigit = 0;  // Initialize a variable to store the maximum digit

    // Step 1: Loop through each character (digit) in the string n
    for (let i = 0; i < n.length; i++) {
        let currentDigit = Number(n[i]);  // Convert the current character to a number

        // Step 2: Check if the current digit is greater than the current maxDigit
        if (currentDigit > maxDigit) {
            maxDigit = currentDigit;  // Update maxDigit if a larger digit is found
        }
    }

    console.log(maxDigit);
    return maxDigit;
}

minPartitions("82734");
