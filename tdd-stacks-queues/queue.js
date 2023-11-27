/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

DO NOT use the .length method on the Array
porototype for calculating the size of the queue.
---------------------- */

class Queue {
  constructor() {
    this.items = new Array();
  }

  // adds an element to the rear of the queue
  enqueue(el) {
    this.items.push(el);
    this.getSize();
  }

  // removes an element from the front of the queue
  // returns that element
  dequeue() {
    if (this.items.length > 0) {
      const el = this.items.shift();
      this.getSize();
      return el;
    }
  }

  // returns the front element of the queue
  // important: does not dequeue it
  peek() {
    return this.items[0];
  }

  // returns true if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // returns the size of the queue
  getSize() {
    this.size = this.items.reduce(acc => ++acc, 0);
    return this.size;
  }
}

module.exports = Queue;
