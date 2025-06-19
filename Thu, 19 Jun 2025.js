// Thu, 19 Jun 2025,

// Case-specific Sorting of Strings
// Difficulty: MediumAccuracy: 69.88%Submissions: 62K+Points: 4Average Time: 45m
// Given a string s consisting of only uppercase and lowercase characters. The task is to sort uppercase and lowercase letters separately such that if the ith place in the original string had an Uppercase character then it should not have a lowercase character after being sorted and vice versa.

// Examples :

// Input: s = "GEekS"
// Output: EGekS
// Explanation: Sorted form of given string with the same case of character will result in output as EGekS.
// Input: s = "XWMSPQ"
// Output: MPQSWX
// Explanation: Since all characters are of the same case We can simply perform a sorting operation on the entire string.
// Constraints:
// 1 ≤ s.length() ≤ 105

class Solution {
  caseSort(s) {
    // Arrays to store uppercase and lowercase characters
    let upperArr = [];
    let lowerArr = [];

    // Separate uppercase and lowercase characters
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char >= "A" && char <= "Z") {
        upperArr.push(char);
      } else {
        lowerArr.push(char);
      }
    }

    // Sort the arrays
    upperArr.sort();
    lowerArr.sort();

    // Pointers to track positions in sorted arrays
    let uIndex = 0;
    let lIndex = 0;
    let result = [];

    // Construct the result array by replacing characters
    for (let i = 0; i < s.length; i++) {
      if (s[i] >= "A" && s[i] <= "Z") {
        result.push(upperArr[uIndex]);
        uIndex++;
      } else {
        result.push(lowerArr[lIndex]);
        lIndex++;
      }
    }

    // Convert the result array to a string
    return result.join("");
  }
}
