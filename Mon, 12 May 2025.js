// Meeting Rooms III
// Difficulty: HardAccuracy: 66.41%Submissions: 1K+Points: 8
// You are given an integer n representing the number of rooms numbered from 0 to n - 1. Additionally, you are given a 2D integer array meetings[][] where meetings[i] = [starti, endi] indicates that a meeting is scheduled during the half-closed time interval [starti, endi). All starti values are unique.

// Meeting Allocation Rules:

// When a meeting starts, assign it to the available room with the smallest number.
// If no rooms are free, delay the meeting until the earliest room becomes available. The delayed meeting retains its original duration.
// When a room becomes free, assign it to the delayed meeting with the earliest original start time.
// Determine the room number that hosts the most meetings. If multiple rooms have the same highest number of meetings, return the smallest room number among them.

// Examples:

// Input: n = 2, meetings[][] = [[0, 6], [2, 3], [3, 7], [4, 8], [6, 8]]
// Output: 1
// Explanation: Time 0: Both rooms available. [0,6] starts in room 0.
// Time 2: Room 0 busy until 6. Room 1 available. [2,3] starts in room 1.
// Time 3: Room 1 frees up. [3,7] starts in room 1.
// Time 4: Both rooms busy. [4,8] is delayed.
// Time 6: Room 0 frees up. Delayed [4,8] starts in room 0 [6,10).
// Time 6: [6,8] arrives but both rooms busy. It’s delayed.
// Time 7: Room 1 frees up. Delayed [6,8] starts in room 1 [7,9).
// Meeting counts: [2, 3]
// Input: n = 4, meetings[][] = [[0, 8], [1, 4], [3, 4], [2, 3]
// Output: 2
// Explanation: Time 0: All rooms available. [0,8] starts in room 0.
// Time 1: Room 0 busy until 8. Rooms 1, 2, 3 available. [1,4] starts in room 1.
// Time 2: Rooms 0 and 1 busy. Rooms 2, 3 available. [2,3] starts in room 2.
// Time 3: Room 2 frees up. [3,4] starts in room 2.
// Meeting counts: [1, 1, 2, 0]
// Constraints:

// 1 ≤ n ≤ 104
// 1 ≤ meetings.size() ≤ 104
// meetings[i].size() == 2
// 0 ≤ starti < endi ≤ 104

//{ Driver Code Starts
// Initial Template for javascript
const readline = require("readline");

// Position this line where user code will be pasted.

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let input = [];
  rl.on("line", (line) => {
    input.push(line.trim());
  });

  rl.on("close", () => {
    let index = 0;
    const t = parseInt(input[index++]);

    for (let tc = 0; tc < t; tc++) {
      const n = parseInt(input[index++]);
      const m = parseInt(input[index++]);
      const meetings = [];
      for (let i = 0; i < m; i++) {
        const parts = input[index++].split(" ").map(Number);
        meetings.push([parts[0], parts[1]]);
      }
      const solution = new Solution();
      const result = solution.mostBooked(n, meetings);
      console.log(result);
      console.log("~");
    }
  });
}

main();
// } Driver Code Ends

// User function Template for javascript

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  mostBooked(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    // Available rooms: min-heap by room number.
    const available = new MinHeap((a, b) => a - b);
    for (let i = 0; i < n; i++) {
      available.push(i);
    }

    // Occupied rooms: min-heap by end time, then room number.
    const occupied = new MinHeap((a, b) => {
      if (a.end !== b.end) return a.end - b.end;
      return a.room - b.room;
    });

    const counts = new Array(n).fill(0);

    for (const [start, end] of meetings) {
      // Free up rooms that have ended by the current meeting's start time.
      while (!occupied.isEmpty() && occupied.peek().end <= start) {
        const { room } = occupied.pop();
        available.push(room);
      }

      if (!available.isEmpty()) {
        const room = available.pop();
        counts[room]++;
        occupied.push({ end: end, room: room });
      } else {
        // Assign to the earliest ending room, then update its end time.
        const earliest = occupied.pop();
        const duration = end - start;
        const newEnd = earliest.end + duration;
        counts[earliest.room]++;
        occupied.push({ end: newEnd, room: earliest.room });
      }
    }

    // Determine the room with the highest meeting count.
    let maxCount = -1;
    let result = 0;
    for (let i = 0; i < n; i++) {
      if (counts[i] > maxCount) {
        maxCount = counts[i];
        result = i;
      } else if (counts[i] === maxCount && i < result) {
        result = i;
      }
    }
    return result;
  }
}

class MinHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.isEmpty()) return null;
    const root = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return root;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parent]) < 0) {
        [this.heap[index], this.heap[parent]] = [
          this.heap[parent],
          this.heap[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;
      if (
        left < this.heap.length &&
        this.comparator(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }
      if (
        right < this.heap.length &&
        this.comparator(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
