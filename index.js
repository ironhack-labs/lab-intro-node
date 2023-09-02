class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if ((SortedList.length = 0)) {
      throw new Error("EmptySortedList");
    } else {
      // return the max (highest) value in the list
      return Math.max(...this.items);
    }
  }

  min() {
    if ((SortedList.length = 0)) {
      throw new Error("EmptySortedList");
    } else {
      // return the min (lowest) value in the list
      return Math.min(...this.items);
    }
  }

  sum() {
    if ((this.items.length = 0)) {
      return 0;
    } else {
      //return the sum of all elements in the list
      return this.items.reduce((a, b) => a + b, 0);
    }
  }

  avg() {
    if ((SortedList.length = 0)) {
      throw new Error("EmptySortedList");
    } else {
      //return the average of elements in the list
      return this.sum / this.items.length;
    }
  }
}
module.exports = SortedList;
