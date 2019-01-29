class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length += 1;
  }
  get(pos) {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.item[this.length - 1];
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(this.items);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(this.items);
    }
  }
  average() {
    this.items.sum / this.length;
  }
  sum() {
    this.items.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  }
}

let firstSortedList = new SortedList();

console.log(firstSortedList);

module.exports = SortedList;
