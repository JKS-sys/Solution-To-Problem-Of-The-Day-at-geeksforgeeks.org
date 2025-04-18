// Implement Trie
// Difficulty: MediumAccuracy: 65.68%Submissions: 67K+Points: 4Average Time: 30m
// Implement Trie class and complete insert(), search() and isPrefix() function for the following queries :

// Type 1 : (1, word), calls insert(word) function and insert word in the Trie
// Type 2 : (2, word), calls search(word) function and check whether word exists in Trie or not.
// Type 3 : (3, word), calls isPrefix(word) function and check whether word exists as a prefix of any string in Trie or not.
// Examples :

// Input: query[][] = [[1, "abcd"], [1, "abc"], [1, "bcd"], [2, "bc"], [3, "bc"], [2, "abc"]]
// Output: [false, true, true]
// Explanation: string "bc" does not exist in the trie, "bc" exists as prefix of the word "bcd" in the trie, and "abc" also exists in the trie.
// Input: query[][] = [[1, "gfg"], [1, "geeks"], [3, "fg"], [3, "geek"], [2, "for"]]
// Output: [false, true, false]
// Explanation: The string "for" is not present in the trie, "fg" is not a valid prefix, while "geek" is a valid prefix of the word "geeks" in the trie.
// Constraints:
// 1 ≤ query.size() ≤ 104
// 1 ≤ word.size() ≤ 103

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
const readline = require("readline");

// Create an interface to read lines from the input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Position this line where user code will be pasted.

function main() {
  let input = [];
  rl.on("line", (line) => {
    input.push(line.trim());
  });

  rl.on("close", () => {
    let t = parseInt(input[0]);
    let index = 1;

    for (let i = 0; i < t; i++) {
      let q = parseInt(input[index++]);
      let ans = [];
      let trie = new Trie();

      for (let j = 0; j < q; j++) {
        let query = input[index++].split(" ");
        let x = parseInt(query[0]);
        let s = query[1];

        if (x === 1) {
          trie.insert(s);
        } else if (x === 2) {
          ans.push(trie.search(s));
        } else if (x === 3) {
          ans.push(trie.isPrefix(s));
        }
      }

      // Print results as true/false
      console.log(ans.map((res) => (res ? "true" : "false")).join(" "));
      console.log("~");
    }
  });
}

main();
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
// User function Template for javascript
class Trie {
  constructor() {
    // Initialize the root node with an empty children object and isEnd flag
    this.root = { children: {}, isEnd: false };
  }

  insert(word) {
    // Start from the root node
    let node = this.root;
    // Traverse each character in the word
    for (const char of word) {
      // If the current character is not a child, create a new node
      if (!node.children[char]) {
        node.children[char] = { children: {}, isEnd: false };
      }
      // Move to the child node
      node = node.children[char];
    }
    // Mark the end of the word
    node.isEnd = true;
  }

  search(word) {
    // Start from the root node
    let node = this.root;
    // Traverse each character in the word
    for (const char of word) {
      // If the current character is not a child, the word doesn't exist
      if (!node.children[char]) {
        return false;
      }
      // Move to the child node
      node = node.children[char];
    }
    // Return true only if the end node is marked as the end of a word
    return node.isEnd;
  }

  isPrefix(prefix) {
    // Start from the root node
    let node = this.root;
    // Traverse each character in the prefix
    for (const char of prefix) {
      // If the current character is not a child, the prefix doesn't exist
      if (!node.children[char]) {
        return false;
      }
      // Move to the child node
      node = node.children[char];
    }
    // All characters in the prefix exist in the trie
    return true;
  }
}
