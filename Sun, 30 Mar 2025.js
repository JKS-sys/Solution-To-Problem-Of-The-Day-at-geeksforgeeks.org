// Gas Station
// Difficulty: MediumAccuracy: 34.79%Submissions: 185K+Points: 4Average Time: 20m
// There are some gas stations along a circular route. You are given two integer arrays gas[] denoted as the amount of gas present at each station and cost[] denoted as the cost of travelling to the next station. You have a car with an unlimited gas tank. You begin the journey with an empty tank from one of the gas stations. Return the index of the starting gas station if it's possible to travel around the circuit without running out of gas at any station in a clockwise direction. If there is no such starting station exists, return -1.
// Note: If a solution exists, it is guaranteed to be unique.

// Examples:

// Input: gas[] = [4, 5, 7, 4], cost[]= [6, 6, 3, 5]
// Output: 2
// Explanation: It is possible to travel around the circuit from station at index 2. Amount of gas at station 2 is (0 + 7) = 7.
// Travel to station 3. Available gas = (7 – 3 + 4) = 8.
// Travel to station 0. Available gas = (8 – 5 + 4) = 7.
// Travel to station 1. Available gas = (7 – 6 + 5) = 6.
// Return to station 2. Available gas = (6 – 6) = 0.
// Input: gas[] = [1, 2, 3, 4, 5], cost[] = [3, 4, 5, 1, 2]
// Output: 3
// Explanation: It is possible to travel around the circuit from station at index 3. Amount of gas at station 3 is (0 + 4) = 4.
// Travel to station 4. Available gas = 4 – 1 + 5 = 8.
// Travel to station 0. Available gas = 8 – 2 + 1 = 7.
// Travel to station 1. Available gas= 7 – 3 + 2 = 6.
// Travel to station 2. Available gas = 6 – 4 + 3 = 5.
// Travel to station 3. The cost is 5. The gas is just enough to travel back to station 3.
// Input: gas[] = [3, 9], cost[] = [7, 6]
// Output: -1
// Explanation: There is no gas station to start with such that you can complete the circuit.
// Constraints:
// 1 ≤ gas.size(), cost.size() ≤ 106
// 1 ≤ gas[i], cost[i] ≤ 103

// ---
// introduction:
//   name: "Jagadeesh Kumar S"
//   contact: "+91 73972 85837 | 33x23@pm.me"
//   description: "A problem-solving enthusiast passionate about coding challenges."

// technical_achievements:
//   - "Solved 100+ daily coding challenges on GeeksforGeeks"
//   - "Ranked in the top 130 on SRM Institute of Science and Technology's GeeksforGeeks leaderboard"
//   - "Maintained a 100+ day streak for Problem of the Day"

// github:
//   contributions: "Solutions available at https://github.com/JKS-sys/Solution-To-Problem-Of-The-Day-at-geeksforgeeks.org"
// ---

//{ Driver Code Starts
// Initial Template for javascript

// Driver code
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let currentLine = 0;

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  main();
});

function readLine() {
  return inputLines[currentLine++];
}

function main() {
  let tc = parseInt(readLine());
  while (tc > 0) {
    let gas = readLine().split(" ").map(Number);
    let cost = readLine().split(" ").map(Number);
    let ob = new Solution();
    let ans = ob.startStation(gas, cost);
    console.log(ans);
    console.log("~");
    tc--;
  }
}

// } Driver Code Ends

// My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  startStation(gas, cost) {
    // Initialize total gas difference, current gas difference, and start index
    let total = 0; // Total gas minus total cost for all stations
    let current = 0; // Current gas in the tank during traversal
    let start = 0; // Starting station index candidate

    // Iterate through each gas station to compute the total and check feasibility
    for (let i = 0; i < gas.length; i++) {
      // Calculate the difference between gas available and cost to next station
      const diff = gas[i] - cost[i];
      // Accumulate the total difference to check overall feasibility
      total += diff;
      // Accumulate the current gas difference to check if the journey can continue
      current += diff;

      // If current gas becomes negative, reset starting station and current gas
      if (current < 0) {
        start = i + 1; // Move start to the next station
        current = 0; // Reset current gas as we start fresh from next station
      }
    }

    // If total gas is non-negative, return the valid start index; otherwise, return -1
    return total >= 0 ? start : -1;
  }
}
