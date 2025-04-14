// A new alien language uses the English alphabet, but the order of letters is unknown. You are given a list of words[] from the alien language’s dictionary, where the words are claimed to be sorted lexicographically according to the language’s rules.

// Your task is to determine the correct order of letters in this alien language based on the given words. If the order is valid, return a string containing the unique letters in lexicographically increasing order as per the new language's rules. If there are multiple valid orders, return any one of them.

// However, if the given arrangement of words is inconsistent with any possible letter ordering, return an empty string ("").

// A string a is lexicographically smaller than a string b if, at the first position where they differ, the character in a appears earlier in the alien language than the corresponding character in b. If all characters in the shorter word match the beginning of the longer word, the shorter word is considered smaller.
// Your implementation will be tested using a driver code. It will print true if your returned order correctly follows the alien language’s lexicographic rules; otherwise, it will print false.

// Examples:

// Input: words[] = ["cb", "cba", "a", "bc"]
// Output: true
// Explanation: You need to return "cab" as the correct order of letters in the alien dictionary.
// Input: words[] = ["ab", "aa", "a"]
// Output: ""
// Explanation: You need to return "" because "aa" is lexicographically larger than "a", making the order invalid.
// Input: words[] = ["ab", "cd", "ef", "ad"]
// Output: ""
// Explanation: You need to return "" because "a" appears before "e", but then "e" appears before "a", which contradicts the ordering rules.

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

function validate(original, order) {
  let mp = new Map();

  for (const word of original) {
    for (const ch of word) {
      mp.set(ch, 1);
    }
  }

  for (const ch of order) {
    if (!mp.has(ch)) return false;
    mp.delete(ch);
  }

  if (mp.size !== 0) return false;

  let indexMap = new Map();
  for (let i = 0; i < order.length; i++) {
    indexMap.set(order[i], i);
  }

  for (let i = 0; i < original.length - 1; i++) {
    const a = original[i],
      b = original[i + 1];
    let k = 0,
      n = a.length,
      m = b.length;

    while (k < n && k < m && a[k] === b[k]) k++;

    if (k < n && k < m && indexMap.get(a[k]) > indexMap.get(b[k])) {
      return false;
    }

    if (k !== n && k === m) {
      return false;
    }
  }
  return true;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCases = null;
let wordsArray = [];
let currentTestCase = 0;

rl.on("line", (line) => {
  if (testCases === null) {
    testCases = parseInt(line.trim());
  } else {
    wordsArray.push(line.trim().split(" "));

    if (++currentTestCase === testCases) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  for (let i = 0; i < wordsArray.length; i++) {
    const words = wordsArray[i];
    const original = [...words];

    const solution = new Solution();
    const order = solution.findOrder(words);

    if (order === "") {
      console.log('""');
    } else {
      console.log(validate(original, order) ? "true" : "false");
    }
    console.log("~");
  }
});

// } Driver Code Ends

// Hello. My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
// User function Template for javascript
class Solution {
  findOrder(words) {
    if (words.length === 0) return "";

    // Collect all unique characters from the words
    const chars = new Set();
    for (const word of words) {
      for (const c of word) {
        chars.add(c);
      }
    }

    // If there are no characters, return empty string (though constraints say words are non-empty)
    if (chars.size === 0) return "";

    // Initialize adjacency list and in-degree map
    const adj = new Map();
    const inDegree = new Map();
    chars.forEach((c) => {
      adj.set(c, new Set());
      inDegree.set(c, 0);
    });

    // Process each consecutive pair of words to build the graph
    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];
      const minLen = Math.min(word1.length, word2.length);
      let j = 0;

      // Find the first differing character
      while (j < minLen && word1[j] === word2[j]) {
        j++;
      }

      if (j < minLen) {
        const c1 = word1[j];
        const c2 = word2[j];
        // Add edge from c1 to c2 if not already present
        if (!adj.get(c1).has(c2)) {
          adj.get(c1).add(c2);
          inDegree.set(c2, inDegree.get(c2) + 1);
        }
      } else {
        // Check if the first word is longer than the second, which is invalid
        if (word1.length > word2.length) {
          return "";
        }
      }
    }

    // Kahn's algorithm for topological sort
    const queue = [];
    inDegree.forEach((degree, c) => {
      if (degree === 0) {
        queue.push(c);
      }
    });

    const order = [];
    while (queue.length > 0) {
      const u = queue.shift();
      order.push(u);
      // Iterate over all neighbors of u
      for (const v of adj.get(u)) {
        inDegree.set(v, inDegree.get(v) - 1);
        if (inDegree.get(v) === 0) {
          queue.push(v);
        }
      }
    }

    // Check if all characters are included in the order (no cycles)
    if (order.length !== chars.size) {
      return "";
    }

    return order.join("");
  }
}
