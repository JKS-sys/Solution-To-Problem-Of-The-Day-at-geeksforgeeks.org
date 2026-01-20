// Tue, 20 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/implement-undo-redo/1

// Implement UNDO & REDO

// Difficulty: Medium
// Accuracy: 77.69%
// Submissions: 1K+
// Points: 4

// You are given a text document that is initially empty. You need to complete the following functions:

// void append(char x) - Append the character x to the end of the document.
// void undo() - Undo the most recent APPEND operation (remove the last appended character).
// void redo() - Reapply the most recent undone operation (restore the last character removed by UNDO).
// string read() - Return the current content of the document as a string.

// There will be a sequence of q queries arr[] on the document. The queries are represented in numeric form:
// 1 x - Call append(x)
// 2 - Call undo()
// 3 - Call redo()
// 4 - Call read()

// The driver code will process the queries, call the corresponding functions, and finally print the outputs of all READ() operations.
// You only need to implement the above four functions.

// Examples:

// Input: arr[] = [[1 'A'], [1 'B'], [1 'C'], [2], [4], [3], [4]]
// Output: ["AB", "ABC"]
// Explanation: For each query following changes are made into the document.
// 1st query: Append('A'), Document contains "A".
// 2nd query: Append('B'), Document contains "AB".
// 3rd query: Append('C'), Document contains "ABC".
// 4rth query: UNDO(), Last character is removed, Document contains "AB".
// 5th query: READ(), Document content will be printed.
// 6th query: REDO(), Document contains "ABC".
// 7th query: READ(), Document content will be printed.

// Input: arr[] = [[1 'D'], [2], [4]]
// Output: [""]
// Explanation: Queries will be processed as:
// 1st query: Append('D'), Document contains "D".
// 2nd query: UNDO(), Last character is removed, Document becomes empty.
// 3rd query: READ(), Empty Document will be printed.

// Constraints:
// 1 ≤ q ≤ 10^4

// Expected Complexities:
// Time Complexity: O(1)
// Auxiliary Space: O(n)

class Solution {
  constructor() {
    this.document = [];
    this.undoStack = [];
    this.redoStack = [];
  }

  append(x) {
    // Append character to document

    this.document.push(x);

    // Push operation to undo stack

    this.undoStack.push(x);

    // Clear redo stack since new operation invalidates redo history

    this.redoStack = [];
  }

  undo() {
    // Only undo if there's something to undo

    if (this.undoStack.length === 0) return;

    // Pop from undo stack and remove from document

    const lastChar = this.undoStack.pop();
    this.document.pop();

    // Push to redo stack

    this.redoStack.push(lastChar);
  }

  redo() {
    // Only redo if there's something to redo

    if (this.redoStack.length === 0) return;

    // Pop from redo stack and add to document

    const charToRedo = this.redoStack.pop();
    this.document.push(charToRedo);

    // Push to undo stack

    this.undoStack.push(charToRedo);
  }

  read() {
    // Convert document array to string

    return this.document.join("");
  }
}
