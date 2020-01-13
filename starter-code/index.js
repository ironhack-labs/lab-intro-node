class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    return this.items.sort((a, b) => a - b);
  }

  //with arguments
  // add(item) {
  //   return [...arguments].sort((a, b) => a - b);
  // }

  get(pos) {
    if (this.items[pos] !== undefined) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items !== []) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items !== []) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
const test = new SortedList();
console.log(test.add(5));
console.log(test.add(2));
console.log(test.add(7));
console.log(test.items);
// console.log(test.add(1, 2, 7, 4, 6, 24, 5));
console.log(test.get(1));
console.log(test.max());
console.log(test.min());
