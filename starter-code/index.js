class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos >= 0 || pos >= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("Out Of Bounds");
    }
  }
  max() {
    if (this.items.length) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  min() {
    if (this.items.length) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  average() {
    if (this.items.length) {
      return this.sum() / this.items.length;
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.items.length) {
      return this.items.reduce((acc, curValue) => acc + curValue);
    }
    return 0;
  }
}
module.exports = SortedList;

myList = new SortedList([1, 2, 3]);

console.log(myList);

// class SortedList {
//   constructor() {
//     this.items = [];
//     this.length = items.length;
//   }
//   add(item) {}
//   get(pos) {}
//   max() {}
//   min() {}
//   average() {}
//   sum() {}
// }

// module.exports = SortedList;
