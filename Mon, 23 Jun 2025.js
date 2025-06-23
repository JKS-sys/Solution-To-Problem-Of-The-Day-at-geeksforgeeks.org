// Mon, 23 Jun 2025,

// Minimum sum
// Difficulty: MediumAccuracy: 17.14%Submissions: 150K+Points: 4
// Given an array arr[ ] consisting of digits, your task is to form two numbers using all the digits such that their sum is minimized. Return the minimum possible sum as a string with no leading zeroes.

// Examples :

// Input: arr[] = [6, 8, 4, 5, 2, 3]
// Output: "604"
// Explanation: The minimum sum is formed by numbers 358 and 246.
// Input: arr[] = [5, 3, 0, 7, 4]
// Output: "82"
// Explanation: The minimum sum is formed by numbers 35 and 047.
// Input: arr[] = [9, 4]
// Output: "13"
// Explanation: The minimum sum is formed by numbers 9 and 4.
// Constraints:
// 2 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 9

/**
 * @param {number[]} arr
 * @returns {string}
 */
class Solution {
  minSum(arr) {
    let count = new Array(10).fill(0);
    for (let num of arr) {
      count[num]++;
    }
    let sorted = [];
    for (let digit = 0; digit < 10; digit++) {
      for (let j = 0; j < count[digit]; j++) {
        sorted.push(digit);
      }
    }

    let a = "";
    let b = "";
    let aLeading = true;
    let bLeading = true;

    for (let i = 0; i < sorted.length; i++) {
      if (i % 2 === 0) {
        if (aLeading && sorted[i] === 0) {
          continue;
        } else {
          aLeading = false;
          a += sorted[i].toString();
        }
      } else {
        if (bLeading && sorted[i] === 0) {
          continue;
        } else {
          bLeading = false;
          b += sorted[i].toString();
        }
      }
    }

    if (a === "") a = "0";
    if (b === "") b = "0";

    return this.addBigInt(a, b);
  }

  addBigInt(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
      let digitA = i >= 0 ? parseInt(a[i]) : 0;
      let digitB = j >= 0 ? parseInt(b[j]) : 0;
      let total = digitA + digitB + carry;
      carry = Math.floor(total / 10);
      result.push(total % 10);
      i--;
      j--;
    }

    return result.reverse().join("");
  }
}
