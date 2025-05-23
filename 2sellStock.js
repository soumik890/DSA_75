// 2. Best Time to Buy and Sell Stock
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// // Buy on day 1 (price = 1) and sell on day 4 (price = 6): 6 - 1 = 5

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};
