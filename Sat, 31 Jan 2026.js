// Sat, 31 Jan 2026,

// POTQ question was https://www.geeksforgeeks.org/problems/implement-k-queues-in-a-single-array/1

// Implement k Queues in a Single Array
// Difficulty: HardAccuracy: 72.63%Submissions: 6K+Points: 8

// You are given two integers n and k. Your task is to implement a class kQueues that uses a single array of size n to simulate k independent queues.

// The class should support the following operations:

// enqueue(x, i) → Adds the element x into the i-th queue.
// dequeue(i) → Removes the front element from the i-th queue and returns it. Returns -1 if the queue is empty.
// isEmpty(i) → Returns true if i-th queue is empty, else return false.
// isFull() → Returns true if the array is completely full and no more elements can be inserted, otherwise false.

// There will be a sequence of q queries represented as:

//     1 x i : Call enqueue(x, i)
//     2 i : Call dequeue(i)
//     3 i : Call isEmpty(i)
//     4 : Call isFull()

// The driver code will process the queries, call the corresponding functions, and print the results of dequeue, isEmpty, and isFull operations.
// You only need to implement the above four functions.

// Examples:

// Input: n = 4, k = 2, q = 8,
// queries = [[1, 5, 0], [1, 3, 0], [1, 1, 1], [2, 0], [1, 4, 1], [1, 1, 0], [3, 1], [4]]
// Output: [5, false, true]
// Explanation: Queries on the queue are as follows:
// enqueue(5, 0) → queue0 = [5]
// enqueue(3, 0) → queue0 = [5, 3]
// enqueue(1, 1) → queue1 = [1]
// dequeue(0) → returns 5, queue0 = [3]
// enqueue(4, 1) → queue1 = [1, 4]
// enqueue(1, 0) → queue0 = [3, 1]
// isEmpty(1) → false
// isFull() → true

// Input: n = 6, k = 3, q = 4,
// queries = [[1, 3, 2], [2, 0], [1, 2, 1], [3, 2]]
// Output: [-1, false]
// Explanation: Queries on the queue are as follows:
// enqueue(3, 2) → queue2 = [3]
// dequeue(0) → queue0 is empty, returns -1
// enqueue(2, 1) → queue1 = [2]
// isEmpty(2) → false

// Constraints:
// 1 ≤ q ≤ 105
// 1 ≤ k ≤ n ≤ 105
// 0 ≤ values on the queues ≤ 109
// Expected Complexities
// Time Complexity: O(1)
// Auxiliary Space: O(n + k)

class kQueues {
  constructor(n, k) {
    // Initialize data members
    this.n = n; // size of array
    this.k = k; // number of queues
    this.arr = new Array(n); // main array to store elements
    this.front = new Array(k).fill(-1); // front indices for each queue
    this.rear = new Array(k).fill(-1); // rear indices for each queue
    this.next = new Array(n); // to store next pointers
    this.free = 0; // starting index of free list

    // Initialize next array to point to next free slot
    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1; // last slot has no next
  }

  // Check if array is full
  isFull() {
    return this.free === -1;
  }

  // Check if queue i is empty
  isEmpty(i) {
    return this.front[i] === -1;
  }

  // Enqueue element x into queue i
  enqueue(x, i) {
    // Check if array is full
    if (this.isFull()) {
      return;
    }

    // Get next free slot
    let index = this.free;

    // Update free to next free slot
    this.free = this.next[index];

    // If queue is empty, set both front and rear
    if (this.isEmpty(i)) {
      this.front[i] = index;
      this.rear[i] = index;
    } else {
      // Link new element to previous rear
      this.next[this.rear[i]] = index;
      this.rear[i] = index;
    }

    // Set next of new element to -1 (end of queue)
    this.next[index] = -1;

    // Store the element
    this.arr[index] = x;
  }

  // Dequeue element from queue i
  dequeue(i) {
    // Check if queue is empty
    if (this.isEmpty(i)) {
      return -1;
    }

    // Get front index
    let index = this.front[i];

    // Move front to next element in queue
    this.front[i] = this.next[index];

    // If queue becomes empty, update rear too
    if (this.front[i] === -1) {
      this.rear[i] = -1;
    }

    // Add the freed slot to free list
    this.next[index] = this.free;
    this.free = index;

    // Return the dequeued element
    return this.arr[index];
  }
}
