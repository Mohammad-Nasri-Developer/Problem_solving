class Solution {
  int? maxProfit(List<int> prices) {
    if (prices.isEmpty) return 0;

    int minPrice = prices[0];
    int maxProfit = 0;

    for (int i = 0; i < prices.length; i++) {
      int currentPrice = prices[i];
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
      } else {
        int profitRate = currentPrice - minPrice;
        if (maxProfit < profitRate) {
          maxProfit = profitRate;
        }
      }
    }
    return maxProfit;
  }
}

void main() {
  // Create an instance of the Solution class
  Solution solution = Solution();

  // Define a list of stock prices for different days
  List<int> prices = [7, 1, 5, 3, 6, 4];

  // Call the maxProfit method and print the result
  int? result = solution.maxProfit(prices);

  print("The maximum profit is: $result");
}
