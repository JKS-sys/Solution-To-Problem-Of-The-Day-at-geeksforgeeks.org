// Unique Number I
// Difficulty: EasyAccuracy: 66.09%Submissions: 10K+Points: 2
// Given a unsorted array arr[] of positive integers having all the numbers occurring exactly twice, except for one number which will occur only once. Find the number occurring only once.

// Examples :

// Input: arr[] = [1, 2, 1, 5, 5]
// Output: 2
// Explanation: Since 2 occurs once, while other numbers occur twice, 2 is the answer.
// Input: arr[] = [2, 30, 2, 15, 20, 30, 15]
// Output: 20
// Explanation: Since 20 occurs once, while other numbers occur twice, 20 is the answer.
// Constraints
// 1 ≤  arr.size()  ≤ 106
// 0 ≤ arr[i] ≤ 109

//{ Driver Code Starts
// Initial Template for javascript

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    const arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let ans = obj.findUnique(arr);
    console.log(ans);
    console.log("~");
  }
}

// } Driver Code Ends

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  findUnique(arr) {
    // Initialize the result to 0
    let unique = 0;
    // Iterate through each number in the array
    for (const num of arr) {
      // Apply XOR operation between the current result and the number
      unique ^= num;
    }
    // The remaining value is the unique number
    return unique;
  }
}
