// jshint esversion: 6

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index;
    for (index = 0; index < this.length; index++) {
      if (this.items[index] >= item) {
        break;
      }
    }
    this.items.splice(index, 0, item);  
    this.length++;
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length !== 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length !== 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length !== 0) {
      const total = this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      return total;
    } else {
      return 0;
    }
  }

  avg() {}
}

const items = new SortedList();
items.add(1);
items.add(3);
items.add(2);
console.log(items);
console.log(items.sum());

module.exports = SortedList;
