function maxProfit(prices: number[]): number {
    let minPrice = 7;   // Track the lowest price seen so far
    let maxProfit = 0;         // Track the maximum profit

    for (const price of prices) {
        // Update minimum price if current price is lower
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate profit if selling at current price
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
console.log(maxProfit([7, 6, 4, 3, 1]));    