// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

  constructor() {
    this._data = [];
  }

  add(record) {
    this._data.unshift(record);
    //this._data = [ record ].concat(this._data); // Alternate way of adding to the front of the array.
    return this._data.length;
  }

  remove() {
    return this._data.pop();
  }

}

module.exports = Queue;
