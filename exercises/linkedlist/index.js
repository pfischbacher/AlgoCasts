// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
// file:///home/phil/projects/study/AlgoCasts/exercises/linkedlist/directions.html

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //this.head = null; 
    this.clear();
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    //this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
    //return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    
//    let currentNode = this.head;
//    let last = currentNode;
//
//    while (currentNode) {
//      last = currentNode;
//      currentNode = currentNode.next;
//    }
//
//    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
//    if (this.head) {
//      this.head = this.head.next;
//    }
  }

  removeLast() {
    this.removeAt(this.size() - 1);
//    if (this.head) {
//      if (this.head.next) {
//        let currentNode = this.head;
//        let last = currentNode;
//
//        while (currentNode.next) {
//          last = currentNode;
//          currentNode = currentNode.next;
//        }
//
//        last.next = null;
//
//      } else {
//        this.clear();
//      }
//    }
  }

  insertLast(data) {
    this.insertAt(data, this.size());
//    let node = new Node(data);
//    let lastNode = this.getLast();
//
//    if (lastNode) {
//      lastNode.next = node;
//    } else {
//      this.head = node;
//    }
  }

  getAt(index) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode && counter < index) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  removeAt(index) {
    //if (this.head && index < this.size()) { //This is probably slower.
    if (this.head) {
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
      const previousNode = this.getAt(index - 1);
      if (previousNode && previousNode.next) {
        previousNode.next = previousNode.next.next;
      }
    }  
  }

  insertAt(data, index) {
    if (this.head && index > 0) {
      const previousNode = this.getAt(index - 1) || this.getLast();
      if (previousNode) {
        const newNode = new Node(data, previousNode.next);
        previousNode.next = newNode;
      }
    } else {
      this.head = new Node(data, this.head);
    }
  }

  forEach(fn) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  
}


/*
const nodeOne = new Node(5);
const list = new LinkedList();
list.insertFirst(5);
*/

module.exports = { Node, LinkedList };
