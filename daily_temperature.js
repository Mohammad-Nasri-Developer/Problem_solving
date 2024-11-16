/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//  temperatures = [73,74,75,71,69,72,76,73]
var dailyTemperatures = function(temperatures) {
    let nextTemperatures = new Array(temperatures.length).fill(0);
    let stack = []; // Stack to store indices of days

    // Traverse from right to left
        for (let i = temperatures.length -1; i >= 0; i--){

            // compare with the element last element of the stack
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop(); // These days are not helpful
            }

            if (stack.length > 0) {
                nextTemperatures[i] = stack[stack.length - 1] - i;
            }

            stack.push(i);
        }
            console.log(nextTemperatures);
        return nextTemperatures;
};


dailyTemperatures([73,74,75,71,69,72,76,73]);