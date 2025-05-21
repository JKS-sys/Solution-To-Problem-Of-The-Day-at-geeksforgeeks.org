// Wed, 21 May 2025,

// Kth Smallest Number in Multiplication Table
// Difficulty: HardAccuracy: 45.11%Submissions: 6K+Points: 8
// Given three integers m, n and k. Consider a grid of m * n, where mat[i][j] = i * j (1 based index). The task is to return the kth smallest element in the m * n multiplication table.

// Examples :

// Input: m = 3, n = 3, k = 5
// Output: 3
// Explanation:

// The 5th smallest element is 3.
// Input: m = 2, n = 3, k = 6
// Output: 6
// Explanation: [1, 2, 3][2, 4, 6]. The 6th smallest element is 6.
// Constraints:
// 1 <= m, n <= 3 * 104
// 1 <= k <= m * n

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

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  kthSmallest(m, n, k) {
    // Swap m and n to minimize the number of iterations in the loop
    if (m > n) {
      [m, n] = [n, m];
    }

    let low = 1;
    let high = m * n;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      let count = 0;

      // Calculate the number of elements less than or equal to mid
      for (let i = 1; i <= m; i++) {
        // Optimization: break early if i exceeds mid to avoid unnecessary iterations
        if (i > mid) break;
        const temp = Math.floor(mid / i);
        count += Math.min(temp, n);
      }

      // Adjust the search range based on the count
      if (count >= k) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}
