/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node as the new tail of the list
  makeTail(tailValue) {
    this.tail.next = new Node(tailValue);
    this.tail = this.tail.next;
  }

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  // WARM UP

  // returns the value of the head of the linked list
  headValue() {
    return this.head.value;
  }

  // returns the value of the tail of the linked list
  tailValue() {
    return this.tail.value;
  }

  // returns the value of the node that comes after the head
  nextToHeadValue() {
    return this.head.next ? this.head.next.value : null;
  }

  // MAIN EXERCISES

  // returns the node stored at the Nth index position of the list
  getNthNode(index) {
    if (index > this.getSize() - 1) return null;

    let currentNode = this.head;

    for (let i = 0; i < this.getSize(); i++) {
      if (index === i) return currentNode;
      currentNode = currentNode.next;
    }
  }

  // removes the node assigned to the tail and returns removed node
  removeTail() {
    const secondLastNode = this.getNthNode(this.getSize() - 2);
    const removedNode = this.tail;
    this.tail = secondLastNode;
    this.tail.next = null;
    return removedNode;
  }

  // adds a new node as head of the list
  makeHead(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  // removes the node assigned to the head and returns removed node
  removeHead() {
    const removedNode = this.head;
    if (this.getSize() === 1) this.head = this.tail = null;
    else this.head = this.getNthNode(1);
    return removedNode;
  }

  // returns the first node that contains the value
  findNode(refNodeValue) {
    let currentNode = this.head;

    for (let i = 0; i < this.getSize(); i++) {
      if (currentNode.value === refNodeValue) return currentNode;
      currentNode = currentNode.next;
    }
    return "No node found.";
  }

  // applies a callback to every node in the list
  forEach(cb) {
    let currentNode = this.head;

    for (let i = 0; i < this.getSize(); i++) {
      cb(currentNode);
      currentNode = currentNode.next;
    }
  }

  // inserts a new node after the reference node
  insertAfter(refNodeValue, value) {
    const matchedNode = this.findNode(refNodeValue);

    if (typeof matchedNode === "string") return matchedNode;

    const newNode = new Node(value);
    newNode.next = matchedNode.next;
    matchedNode.next = newNode;
    if (matchedNode === this.tail) this.tail = newNode;
  }

  // remove the node after the reference node
  removeAfter(refNodeValue) {
    const matchedNode = this.findNode(refNodeValue);

    if (typeof matchedNode === "string") return matchedNode;

    const removedNode = matchedNode.next;
    matchedNode.next = matchedNode.next.next;
    if (removedNode === this.tail) this.tail = matchedNode;

    return removedNode;
  }

  // OPTIONAL

  //merges the current list with a new list, appending the new list after the tail of the current list
  mergeAppend(newList) {
    this.tail.next = newList.head;
    this.tail = newList.tail;
  }

  //merges the current list with a new list, by inserting the new list after the node in the index position.
  mergeAfterIndex(newList, index) {
    const mergePointNode = this.getNthNode(index);
    if (mergePointNode === this.tail) this.tail = newList.tail;
    newList.tail.next = mergePointNode.next;
    mergePointNode.next = newList.head;
  }
}

module.exports = LinkedList;
