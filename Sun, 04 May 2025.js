// Smallest distinct window
// Difficulty: MediumAccuracy: 31.85%Submissions: 105K+Points: 4
// Given a string str, your task is to find the length of the smallest window that contains all the characters of the given string at least once.

// Example:

// Input: str = "aabcbcdbca"
// Output: 4
// Explanation: Sub-String "dbca" has the smallest length that contains all the characters of str.
// Input: str = "aaab"
// Output: 2
// Explanation: Sub-String "ab" has the smallest length that contains all the characters of str.
// Input: str = "geeksforgeeks"
// Output: 8
// Explanation: There are multiple substring with smallest length that contains all characters of str, "geeksfor" and "forgeeks".
// Constraints:
// 1 ≤ str.size() ≤ 105
// str contains only lower-case english alphabets.

//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine().trim();
    let obj = new Solution();
    let res = obj.findSubString(s);
    console.log(res);

    console.log("~");
  }
}

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
  findSubString(str) {
    const n = str.length;
    if (n === 0) return 0;

    // Determine the number of distinct characters in the string
    const distinctCount = new Set(str).size;

    let left = 0;
    let minLen = Infinity;
    let currentCount = 0;

    // Frequency map to keep track of the count of each character in the current window
    const freqMap = new Map();

    for (let right = 0; right < n; right++) {
      const char = str[right];
      const count = freqMap.get(char) || 0;

      // If the character is not present in the current window, increment currentCount
      if (count === 0) {
        currentCount++;
      }

      // Update the frequency map for the current character
      freqMap.set(char, count + 1);

      // When the current window contains all distinct characters, try to minimize the window
      while (currentCount === distinctCount) {
        const currentWindowLen = right - left + 1;

        // Update the minimum length if the current window is smaller
        if (currentWindowLen < minLen) {
          minLen = currentWindowLen;
        }

        // Remove the character at the left pointer from the current window
        const leftChar = str[left];
        freqMap.set(leftChar, freqMap.get(leftChar) - 1);

        // If the character's count drops to zero, it is no longer in the window
        if (freqMap.get(leftChar) === 0) {
          currentCount--;
        }

        // Move the left pointer to the right to try a smaller window
        left++;
      }
    }

    // Return the minimum window length found, or 0 if no valid window exists
    return minLen === Infinity ? 0 : minLen;
  }
}
