// the goal is to create a class that maintains a sorted list of numbers in ascending order

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (typeof item === "number") {
      this.items.push(item);
      this.length++;
      this.items.sort((a,b) => a - b);
    }
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error ("OutOfBounds");
    }
   
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1];
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (!this.length) {
      return 0;
    }
    return this.items.reduce((acc,curr) => (acc += curr), 0);
  }

  avg() {
    if (!this.length) {
     throw new Error ("EmptySortedList");
    }
    return (this.items.reduce((acc, curr) => (acc +=curr), 0) / this.items.length);
  }
}

module.exports = SortedList;
