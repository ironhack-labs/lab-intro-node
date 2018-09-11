class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    let element;
    element = this.items[pos - 1];
    return element;
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => {
        return b - a;
      });
      return this.items[0];
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => {
        return a - b;
      });
      return this.items[0];
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
  sum() {
    let sumElem = 0;
    sumElem = this.items.reduce((acc, ele) => {
      return (acc += ele);
    }, 0);
    return sumElem;
  }
}

module.exports = SortedList;
