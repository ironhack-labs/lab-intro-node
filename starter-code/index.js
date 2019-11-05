class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++; // mocha renvoie 1 : (sl.length, 1) donc m.à j. length aussi
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => Math.max(a, b));
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => Math.min(a, b));
    }
  }
  sum() {
    return this.items.reduce((total, item) => total + item, 0);
    // OR:
    //let total = 0;
    // this.items.forEach(item => {
    //   total += item;
    // });
    // return total;
  }

  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}
module.exports = SortedList;