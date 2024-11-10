/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    // create an Array with n+1 length like this: [Infinity,Infinity,Infinity....]
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 can be represented with 0 squares,[0,Infinity,Infinity....]

    // Fill in the dp array
    for (let i = 1; i <= n; i++) {
        // Check each perfect square that is less than or equal to i
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    // The answer for dp[n] will have the minimum number of perfect squares for n
    return dp[n];

};