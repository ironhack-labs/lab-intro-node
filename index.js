class SortedList {
  constructor() {
    this.items = []; // an array to hold the numbers in sorted order
    this.length = 0; // keeps track of the number of items in the list
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // Sorts the list in ascending order
    this.length++;
  }

  // Returns the item at the specified position (0-based index)
  get(pos) {
    
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  // Returns the maximum value in the list

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  // Returns the minimum value in the list
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  // Returns the sum of all the items in the list
  sum() {
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  // Returns the average of all the items in the list
  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
 }


module.exports = SortedList;
