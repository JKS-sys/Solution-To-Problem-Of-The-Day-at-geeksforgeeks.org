// Fri, 23 May 2025,

// Dice throw
// Difficulty: MediumAccuracy: 36.52%Submissions: 36K+Points: 4Average Time: 30m
// Given n dice each with m faces. Find the number of ways to get sum x which is the summation of values on each face when all the dice are thrown.

// Example:

// Input: m = 6, n = 3, x = 12
// Output: 25
// Explanation: There are 25 total ways to get the Sum 12 using 3 dices with faces from 1 to 6.
// Input: m = 2, n = 3, x = 6
// Output: 1
// Explanation: There is only 1 way to get the Sum 6 using 3 dices with faces from 1 to 2. All the dices will have to land on 2.
// Constraints:
// 1 <= m,n,x <= 50

class Solution {
  noOfWays(m, n, x) {
    // Check if the desired sum x is possible with n dice each having m faces
    if (x < n || x > m * n) {
      return 0;
    }

    // Initialize the previous array for 1 die. Each face (1 to m) has exactly 1 way.
    let prev = new Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) {
      prev[j] = 1;
    }

    // Iterate from 2 dice up to n dice
    for (let i = 2; i <= n; i++) {
      // The maximum possible sum with i dice is i * m
      const maxSum = i * m;
      // Initialize current array to store ways for current number of dice
      let current = new Array(maxSum + 1).fill(0);

      // Calculate the number of ways for each possible sum j with i dice
      for (let j = i; j <= maxSum; j++) {
        let sum = 0;
        // Consider each face value v of the current die
        for (let v = 1; v <= m; v++) {
          const s = j - v; // The remaining sum to be achieved with (i-1) dice
          // Check if the remaining sum s is valid for (i-1) dice
          if (s >= i - 1 && s <= (i - 1) * m) {
            sum += prev[s] || 0; // Add the ways from previous if valid
          }
        }
        current[j] = sum;
      }

      // Update previous array to current for next iteration
      prev = current.slice();
    }

    // Return the number of ways to achieve sum x with n dice
    return prev[x] || 0;
  }
}
