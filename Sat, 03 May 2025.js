// You are given the head of a linked list. You have to replace all the values of the nodes with the nearest prime number. If more than one prime number exists at an equal distance, choose the smallest one. Return the head of the modified linked list.

// Examples :

// Input: head = 2 → 6 → 10
// Output: 2 → 5 → 11

// Explanation: The nearest prime of 2 is 2 itself. The nearest primes of 6 are 5 and 7, since 5 is smaller so, 5 will be chosen. The nearest prime of 10 is 11.
// Input: head = 1 → 15 → 20
// Output: 2 → 13 → 19

// Explanation: The nearest prime of 1 is 2. The nearest primes of 15 are 13 and 17, since 13 is smaller so, 13 will be chosen. The nearest prime of 20 is 19.
// Constraints:
// 1 <= no. of Nodes <= 104
// 1 <= node.val <= 104

//{ Driver Code Starts
// Initial Template
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

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function printlist(head) {
  let current = head;
  let s = "";
  while (current !== null) {
    s += current.val + " ";
    current = current.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let n = input_ar1.length;
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let i = 1; i < n; i++) {
      tail.next = new Node(input_ar1[i]);
      tail = tail.next;
    }
    let obj = new Solution();
    head = obj.primeList(head);
    printlist(head);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {Node} head
 * @returns {Node}
 */
/*
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
*/

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  // Function to return all prime numbers in the given link list.
  primeList(head) {
    let current = head;
    while (current !== null) {
      // Replace the current node's value with the nearest prime
      current.val = this.findNearestPrime(current.val);
      current = current.next;
    }
    return head;
  }

  // Finds the nearest prime to the given number n
  findNearestPrime(n) {
    if (this.isPrime(n)) {
      return n;
    }

    // Get the nearest lower and upper primes
    const lower = this.getLowerPrime(n);
    const upper = this.getUpperPrime(n);

    // If there's no lower prime (e.g., n is 1), return upper
    if (lower === null) {
      return upper;
    }

    // Calculate distances
    const distLower = n - lower;
    const distUpper = upper - n;

    // Choose the closest prime, or the smaller one if distances are equal
    if (distLower < distUpper) {
      return lower;
    } else if (distUpper < distLower) {
      return upper;
    } else {
      return Math.min(lower, upper);
    }
  }

  // Checks if a number is prime using optimized trial division method
  isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true; // 2 and 3 are primes
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check for factors up to sqrt(n), stepping by 6k ± 1
    let i = 5;
    let w = 2;
    while (i * i <= n) {
      if (n % i === 0) {
        return false;
      }
      i += w;
      w = 6 - w; // Alternate between 2 and 4 (5, 7, 11, 13,...)
    }
    return true;
  }

  // Finds the largest prime less than n, returns null if none exists
  getLowerPrime(n) {
    if (n < 2) return null;

    // Check numbers from n-1 down to 2 for primality
    for (let i = n - 1; i >= 2; i--) {
      if (this.isPrime(i)) {
        return i;
      }
    }
    return null; // No primes found (only possible if n is 2, which is handled)
  }

  // Finds the smallest prime greater than n
  getUpperPrime(n) {
    let i = n + 1;
    while (true) {
      if (this.isPrime(i)) {
        return i;
      }
      i++;
    }
  }
}
