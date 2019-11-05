class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.items.length != 0) {
      let sortedArray = this.items.sort((a, b) => a - b);
      return sortedArray[sortedArray.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length != 0) {
      let sortedArray = this.items.sort((a, b) => a - b);
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length != 0) {
      return this.items.reduce((acc, val) => acc + val, 0) / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.items.length != 0) {
      return this.items.reduce((acc, val) => acc + val, 0);
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
