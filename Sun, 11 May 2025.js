// Sun, 11 May 2025

// K-th Largest Sum Contiguous Subarray
// Difficulty: MediumAccuracy: 54.33%Submissions: 22K+Points: 4Average Time: 20m
// Given an array arr[] of size n, find the sum of the K-th largest sum among all contiguous subarrays. In other words, identify the K-th largest sum from all possible subarrays and return it.

// Examples:

// Input: arr[] = [3, 2, 1], k = 2
// Output: 5
// Explanation: The different subarray sums we can get from the array are = [6, 5, 3, 2, 1]. Where 5 is the 2nd largest.
// Input: arr[] = [2, 6, 4, 1], k = 3
// Output: 11
// Explanation: The different subarray sums we can get from the arrayare = [13, 12, 11, 10, 8, 6, 5, 4, 2, 1]. Where 11 is the 3rd largest.
// Constraints:
// 1 <= arr.size() <= 1000
// 1 <= k <= (n*(n+1))/2
// -105 <= arr[i] <= 105

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

// youtube:
//   channel: "https://www.youtube.com/@JKS-sys"
//   content: "Covers a variety of topics including Data Structures, Algorithms, and Competitive Programming."
//   topics:
//     - "Tutorials on various programming languages and frameworks"
//     - "Live coding sessions and problem-solving strategies"
//     - "Interviews with industry experts and coding competitions"
//     - "Tips and tricks for improving coding skills and interview preparation"
//     - "Collaborations with other YouTubers and coding communities"
//     - "Engaging with the audience through Q&A sessions and feedback"
//     - "Sharing personal experiences and insights on the tech industry"
//     - "Exploring new technologies and trends in the programming world"
//     - "Providing resources and recommendations for further learning"
//     - "Encouraging viewers to participate in coding challenges and competitions"
//     - "Building a community of like-minded individuals passionate about coding and technology"
//     - "Sharing success stories and achievements of viewers who have benefited from the channel"
//     - "Creating a positive and supportive environment for learning and growth"
//     - "Encouraging viewers to share their own coding journeys and experiences"
//     - "Fostering a culture of collaboration and knowledge sharing among viewers"
//     - "Promoting diversity and inclusion in the tech community"
//     - "Encouraging viewers to give back to the community through mentorship and support"
//     - "Sharing resources and opportunities for networking and career growth"
//     - "Encouraging viewers to stay curious and keep learning"
//     - "Sharing tips for maintaining a healthy work-life balance in the tech industry"
//     - "Encouraging viewers to pursue their passions and interests in technology"
// ---

//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code
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
    let arr = readLine().split(" ").map(Number);
    let ob = new Solution();
    let k = parseInt(readLine());
    let ans = ob.kthLargest(arr, k);
    console.log(ans);
    console.log("~");
    tc--;
  }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
  // Function to find the kth largest element in the given array.
  kthLargest(arr, k) {
    const n = arr.length;
    // Compute the prefix sum array where prefix[i] is sum of elements from arr[0] to arr[i-1]
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }

    // Generate all possible contiguous subarray sums
    const sums = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        // The sum of elements from arr[i] to arr[j-1] is prefix[j] - prefix[i]
        sums.push(prefix[j] - prefix[i]);
      }
    }

    // Sort the sums in descending order
    sums.sort((a, b) => b - a);

    // Return the k-th largest sum (1-based index, so k-1)
    return sums[k - 1];
  }
}
