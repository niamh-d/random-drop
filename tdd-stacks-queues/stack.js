/* ----------------------
Note: BEFORE tackling the class below,
CREATE tests for each related property and method.

DO NOT use the .length method on the Array
prototype for calculating the size of the stack.
---------------------- */

class Stack {
  constructor() {
    this.items = new Array();
  }

  // adds an element to the top of the stack
  push(el) {
    this.items.push(el);
  }

  // removes an element from the top of the stack
  // returns that element
  pop() {
    if (this.items.length > 0) return this.items.pop();
  }

  // returns true if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // returns the size of the stack
  getSize() {
    return this.items.reduce(acc => ++acc, 0);
  }
}

module.exports = Stack;
