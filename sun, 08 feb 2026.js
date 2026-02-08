// www.geeksforgeeks.org/problems/maximum-product-subarray3604/1

class Solution {
  maxProduct(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      // If current number is negative, the max and min might swap
      if (arr[i] < 0) {
        [maxProduct, minProduct] = [minProduct, maxProduct];
      }

      // Update max and min products ending at current position
      maxProduct = Math.max(arr[i], maxProduct * arr[i]);
      minProduct = Math.min(arr[i], minProduct * arr[i]);

      // Update overall result
      result = Math.max(result, maxProduct);
    }

    return result;
  }
}
