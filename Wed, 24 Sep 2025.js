// Wed, 24 Sep 2025,

// Design MinMax Queue
// Difficulty: MediumAccuracy: 81.75%Submissions: 1K+Points: 4
// Design a SpecialQueue data structure that functions like a normal queue but with additional support for retrieving the minimum and maximum element efficiently.
// The SpecialQueue must support the following operations:

// enqueue(x): Insert an element x at the rear of the queue.
// dequeue(): Remove the element from the front of the queue.
// getFront(): Return the front element without removing.
// getMin(): Return the minimum element in the queue in O(1) time.
// getMax(): Return the maximum element in the queue in O(1) time.
// There will be a sequence of queries queries[][]. The queries are represented in numeric form:

// 1 x : Call enqueue(x)
// 2:  Call dequeue()
// 3: Call getFront()
// 4: Call getMin()
// 5: Call getMax()
// The driver code will process the queries, call the corresponding functions, and print the outputs of getFront(), getMin(), getMax() operations.
// You only need to implement the above five functions.

// Note: It is guaranteed that all the queries are valid.

// Examples:

// Input: q = 6, queries[][] = [[1, 4], [1, 2], [3], [4], [2], [5]]
// Output: [4, 2, 2]
// Explanation: Queries on queue are as follows:
// enqueue(4): Insert 4 at the rear of the queue.
// enqueue(2): Insert 2 at the rear of the queue.
// return the front element i.e 4
// return minimum element from the queue i.e 2
// dequeue(): Remove the front element 4 from the queue
// return maximum element from the queue i.e 2
// Input: q = 4, queries[][] = [[1, 3], [4], [1, 5], [5]]
// Output: [3, 5]
// Explanation: Queries on queue are as follows:
// enqueue(3): Insert 3 at the rear of the queue.
// return minimum element from the queue i.e 3
// enqueue(5): Insert 5 at the rear of the queue.
// return maximum element from the queue i.e 5
// Constraints:
// 1 ≤ queries.size() ≤ 10^5
// 0 ≤ values in the queue ≤ 10^9
// Expected Complexities
// Time Complexity: O(1)
// Auxiliary Space: O(n)

class SpecialQueue {
  constructor() {
    this.mainQueue = [];
    this.minDeque = [];
    this.maxDeque = [];
    this.frontIndex = 0;
    this.minFrontIndex = 0;
    this.maxFrontIndex = 0;
  }

  enqueue(x) {
    this.mainQueue.push(x);
    while (
      this.minDeque.length > this.minFrontIndex &&
      this.minDeque[this.minDeque.length - 1] > x
    ) {
      this.minDeque.pop();
    }
    this.minDeque.push(x);
    while (
      this.maxDeque.length > this.maxFrontIndex &&
      this.maxDeque[this.maxDeque.length - 1] < x
    ) {
      this.maxDeque.pop();
    }
    this.maxDeque.push(x);
  }

  dequeue() {
    if (this.frontIndex >= this.mainQueue.length) return;

    const frontElement = this.mainQueue[this.frontIndex];
    this.frontIndex++;

    if (frontElement === this.minDeque[this.minFrontIndex]) {
      this.minFrontIndex++;
    }

    if (frontElement === this.maxDeque[this.maxFrontIndex]) {
      this.maxFrontIndex++;
    }

    if (this.frontIndex > 1000 && this.frontIndex > this.mainQueue.length / 2) {
      this.mainQueue = this.mainQueue.slice(this.frontIndex);
      this.minDeque = this.minDeque.slice(this.minFrontIndex);
      this.maxDeque = this.maxDeque.slice(this.maxFrontIndex);
      this.frontIndex = 0;
      this.minFrontIndex = 0;
      this.maxFrontIndex = 0;
    }

    return frontElement;
  }

  getFront() {
    return this.frontIndex < this.mainQueue.length
      ? this.mainQueue[this.frontIndex]
      : undefined;
  }

  getMin() {
    return this.minFrontIndex < this.minDeque.length
      ? this.minDeque[this.minFrontIndex]
      : undefined;
  }

  getMax() {
    return this.maxFrontIndex < this.maxDeque.length
      ? this.maxDeque[this.maxFrontIndex]
      : undefined;
  }
}
