// Given two numbers as strings s1 and s2. Calculate their Product.
// Note: The numbers can be negative and You are not allowed to use any built-in function or convert the strings to integers. There can be zeros in the begining of the numbers. You don't need to specify '+' sign in the begining of positive numbers.

// Examples:

// Input: s1 = "0033", s2 = "2"
// Output: "66"
// Explanation: 33 * 2 = 66
// Input: s1 = "11", s2 = "23"
// Output: "253"
// Explanation: 11 * 23  = 253
// Input: s1 = "123", s2 = "0"
// Output: "0"
// Explanation: Anything multiplied by 0 is equal to 0.
// Constraints:
// 1 ≤ s1.size() ≤ 103
// 1 ≤ s2.size() ≤ 103

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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let S1 = readLine();
    let S2 = readLine();

    let obj = new Solution();
    let res = obj.multiplyStrings(S1, S2);

    console.log(res);

    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
  multiplyStrings(s1, s2) {
    // Determine the sign of the result
    let sign = 1;
    if (s1[0] === "-") {
      sign *= -1;
      s1 = s1.substring(1);
    }
    if (s2[0] === "-") {
      sign *= -1;
      s2 = s2.substring(1);
    }

    // Function to trim leading zeros from a string
    const trimLeadingZeros = (s) => {
      let i = 0;
      while (i < s.length && s[i] === "0") {
        i++;
      }
      return i === s.length ? "0" : s.substring(i);
    };

    // Trim leading zeros from both strings
    const num1 = trimLeadingZeros(s1);
    const num2 = trimLeadingZeros(s2);

    // If either number is zero, the product is zero
    if (num1 === "0" || num2 === "0") {
      return "0";
    }

    // Reverse the numbers for easier digit processing
    const reversedNum1 = num1.split("").reverse().join("");
    const reversedNum2 = num2.split("").reverse().join("");

    // Create an array to hold the product digits (initialized to 0)
    const productArray = new Array(
      reversedNum1.length + reversedNum2.length
    ).fill(0);

    // Multiply each digit and accumulate the result
    for (let i = 0; i < reversedNum1.length; i++) {
      const digit1 = parseInt(reversedNum1[i], 10);
      for (let j = 0; j < reversedNum2.length; j++) {
        const digit2 = parseInt(reversedNum2[j], 10);
        const product = digit1 * digit2;
        const position = i + j;
        productArray[position] += product;
      }
    }

    // Handle carry for each position
    let carry = 0;
    for (let k = 0; k < productArray.length; k++) {
      const total = productArray[k] + carry;
      carry = Math.floor(total / 10);
      productArray[k] = total % 10;
    }

    // Convert the product array to a string (reverse to get the correct order)
    const productStrReversed = productArray.reverse();

    // Trim leading zeros and build the result string
    let resultStr = "";
    let leadingZero = true;
    for (const digit of productStrReversed) {
      if (leadingZero && digit === 0) {
        continue;
      } else {
        leadingZero = false;
        resultStr += digit.toString();
      }
    }

    // Apply the sign and return the result
    const finalResult = resultStr === "" ? "0" : resultStr;
    return sign === -1 ? `-${finalResult}` : finalResult;
  }
}
