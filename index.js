
// The task here is to create a class that maintains a sorted list of numbers in ascending order.

class SortedList {
  constructor(items, length) {
    this.items = items || [];
    this.length = length || 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    // throw an error with the message "OutOfBounds" if a user tries to get an element in the non-existing position
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    // if (this.length === 0) {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.items.length - 1];
  }

  min() {
    // if (this.length === 0) {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    
    return this.items.reduce((sum, curr) => sum + curr, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    const total = this.sum();
    return total / this.items.length;
  }
}

module.exports = SortedList;
