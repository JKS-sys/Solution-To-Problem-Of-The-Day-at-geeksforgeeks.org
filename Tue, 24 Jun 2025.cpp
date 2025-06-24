// Tue, 24 Jun 2025,

// Lexicographically Largest String After Deleting K Characters
// Difficulty: MediumAccuracy: 64.8%Submissions: 841+Points: 4Average Time: 15m
// Given a string s consisting of lowercase English letters and an integer k, your task is to remove exactly k characters from the string. The resulting string must be the largest possible in lexicographical  order, while maintain the relative order of the remaining characters.

// Examples:

// Input: s = "ritz" ,k = 2
// Output: tz 
// Explaination:By removing two characters in all possible ways, we get: "ri", "rt", "rz", "it", "iz", and "tz".Among these, "tz" is lexicographically largest string.
// Input: s = "zebra" ,k = 3
// Output: zr 
// Explaination:Removing "e", "b", and "a" results in "zr", which is lexicographically largest string.
// Constraints:
// 1 ≤ s.size() ≤ 105
// 0 ≤ k< s.size()

class Solution {
  public:
    string maxSubseq(string& s, int k) {
        string st;
        for (char c : s) {
            while (k > 0 && !st.empty() && c > st.back()) {
                st.pop_back();
                k--;
            }
            st.push_back(c);
        }
        st.resize(st.size() - k);
        return st;
    }
};
