// jshint esversion:6

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1; // if I add an item I should increase the length of the list!
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptysortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptysortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
      //throw new Error("EmptysortedList");
    } else {
      return this.items.reduce((sum, next) => {
        return sum + next;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptysortedList");
    } else {
      let sum = this.items.reduce((sum, next) => {
        return sum + next;
      }, 0);
      let len = this.items.length;
      return sum / len;
    }
  }
}

let mySortedList = new SortedList();
mySortedList.add(6);
mySortedList.add(3);
mySortedList.add(9);
mySortedList.add(1);
mySortedList.add(7);

console.log(mySortedList);

console.log(mySortedList.get(6));
console.log(mySortedList.max());
console.log(mySortedList.min());
console.log(mySortedList.sum());
console.log(mySortedList.avg());

module.exports = SortedList;
