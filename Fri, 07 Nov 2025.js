// Fri, 07 Nov 2025,

// Weighted Job Scheduling
// Difficulty: Medium Accuracy: 67.38% Submissions: 740+ Points: 4
// Given a 2D array jobs[][] of size n × 3, where each row represents a single job with the following details:

// jobs[i][0] : Start time of the job
// jobs[i][1] : End time of the job
// jobs[i][2] : Profit earned by completing the job
// Find the maximum profit you can earn by scheduling non-overlapping jobs.

// Note: Two jobs are said to be non-overlapping if the end time of one job is less than or equal to the start time of the next job. If a job ends at time X, another job can start exactly at time X.

// Examples:

// Input: jobs[][] =  [[1, 2, 50],
//                  [3, 5, 20],
//                  [6, 19, 100],
//                  [2, 100, 200]]
// Output: 250
// Explanation: The first and fourth jobs with the time range [1, 2] and [2, 100] can be chosen to give maximum profit of 50 + 200 = 250.
// Input: jobs[][] =  [[1, 3, 60],
//                  [2, 5, 50],
//                  [4, 6, 70],
//                  [5, 7, 30]]
// Output: 130
// Explanation: The first and third jobs with the time range [1, 3] and [4, 6] can be chosen to give maximum profit of 60 + 70 = 130.
// Constraints:
// 1 ≤ jobs.size() ≤ 10^5
// 1 ≤ jobs[i][0] < jobs[i][1] ≤ 10^9
// 1 ≤ jobs[i][2] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  maxProfit(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);

    const n = jobs.length;
    const memo = new Array(n).fill(-1);

    function findNextJob(index) {
      let low = index + 1,
        high = n - 1;
      let ans = n;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (jobs[mid][0] >= jobs[index][1]) {
          ans = mid;
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      return ans;
    }

    function dp(i) {
      if (i >= n) return 0;
      if (memo[i] !== -1) return memo[i];

      const nextIndex = findNextJob(i);

      const take = jobs[i][2] + dp(nextIndex);
      const skip = dp(i + 1);

      memo[i] = Math.max(take, skip);
      return memo[i];
    }

    return dp(0);
  }
}
