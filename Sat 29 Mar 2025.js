// Job Sequencing Problem
// Difficulty: MediumAccuracy: 34.51%Submissions: 286K+Points: 4
// You are given two arrays: deadline[], and profit[], which represent a set of jobs, where each job is associated with a deadline, and a profit. Each job takes 1 unit of time to complete, and only one job can be scheduled at a time. You will earn the profit associated with a job only if it is completed by its deadline.

// Your task is to find:

// The maximum number of jobs that can be completed within their deadlines.
// The total maximum profit earned by completing those jobs.
// Examples :

// Input: deadline[] = [4, 1, 1, 1], profit[] = [20, 10, 40, 30]
// Output: [2, 60]
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).
// Input: deadline[] = [2, 1, 2, 1, 1], profit[] = [100, 19, 27, 25, 15]
// Output: [2, 127]
// Explanation: Job1 and Job3 can be done with maximum profit of 127 (100+27).
// Input: deadline[] = [3, 1, 2, 2], profit[] = [50, 10, 20, 30]
// Output: [3, 100]
// Explanation: Job1, Job3 and Job4 can be completed with a maximum profit of 100 (50 + 20 + 30).
// Constraints:
// 1 ≤ deadline.size() == profit.size() ≤ 105
// 1 ≤ deadline[i] ≤ deadline.size()
// 1 ≤ profit[i] ≤ 500

//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", function (line) {
  inputLines.push(line);
}).on("close", function () {
  let t = parseInt(inputLines[0]);
  let index = 1;

  while (t-- > 0) {
    let deadlines = inputLines[index++].split(" ").map(Number);
    let profits = inputLines[index++].split(" ").map(Number);

    let obj = new Solution();
    let result = obj.jobSequencing(deadlines, profits);
    console.log(result[0] + " " + result[1]);
    console.log("~");
  }
});
// } Driver Code Ends

// This is by Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  jobSequencing(deadline, profit) {
    // Combine deadlines and profits into an array of job objects
    const jobs = [];
    let maxDeadline = 0;
    for (let i = 0; i < deadline.length; i++) {
      jobs.push({ deadline: deadline[i], profit: profit[i] });
      // Track the maximum deadline to determine the size of the parent array
      if (deadline[i] > maxDeadline) {
        maxDeadline = deadline[i];
      }
    }

    // Sort jobs in descending order of profit to prioritize higher profits first
    jobs.sort((a, b) => b.profit - a.profit);

    // Initialize the parent array for Union-Find data structure
    // Each index represents a time slot, and parent[i] is the next available slot
    const parent = new Array(maxDeadline + 1);
    for (let i = 0; i <= maxDeadline; i++) {
      parent[i] = i;
    }

    // Variables to track the number of jobs scheduled and total profit
    let count = 0;
    let totalProfit = 0;

    // Find function with path compression to find the latest available slot
    const find = (u) => {
      if (parent[u] !== u) {
        parent[u] = find(parent[u]); // Path compression for efficiency
      }
      return parent[u];
    };

    // Process each job in the sorted order
    for (const job of jobs) {
      const d = job.deadline;
      // Find the latest available slot that can accommodate this job's deadline
      const slot = find(d);

      if (slot > 0) {
        // If a valid slot is found, schedule the job
        count++;
        totalProfit += job.profit;
        // Union the current slot with the previous slot to update available slots
        parent[slot] = find(slot - 1);
      }
    }

    // Return the result as an array [count, totalProfit]
    return [count, totalProfit];
  }
}
