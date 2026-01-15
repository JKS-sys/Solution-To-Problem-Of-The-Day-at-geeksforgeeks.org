// Thu, 15 Aug 2025,

// POTD question was https://www.geeksforgeeks.org/problems/candy/1

// Candy

// Difficulty: Hard
// Accuracy: 55.27%
// Submissions: 42K+
// Points: 8
// Average Time: 45m

// There are n children standing in a line. Each child is assigned a rating value given in the integer array arr[]. You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating than their neighbors get more candies than their neighbors.

// Return the minimum number of candies you need to have to distribute.

// Note: The answer will always fit into a 32-bit integer.

// Examples:

// Input: arr[] = [1, 0, 2]
// Output: 5
// Explanation: Children at index 0 and 2 will get 2 candies each as their rating is higher than index 1, and index 1 will get 1 candy. Thus total candies = 2 + 1 + 2 = 5.

// Input: arr[] = [1, 2, 2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arr[i] ≤ 10^9

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  minCandy(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    let total = n;
    let i = 1;

    while (i < n) {
      if (arr[i] === arr[i - 1]) {
        i++;
        continue;
      }

      let peak = 0;
      while (i < n && arr[i] > arr[i - 1]) {
        peak++;
        total += peak;
        i++;
      }

      if (i === n) {
        return total;
      }

      let valley = 0;
      while (i < n && arr[i] < arr[i - 1]) {
        valley++;
        total += valley;
        i++;
      }

      total -= Math.min(peak, valley);
    }

    return total;
  }
}
