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
    if (this.items[pos] === undefined) {
      return "OutOfBounds";
    } else {
      element = this.items[pos-1];
      return element;
    }
  }
  max() {
    try {
      if (this.items.length === 0) throw ("EmptySortedList");
      this.items.sort((a, b) => {
        return b - a;
      });
      return this.items[0];
    } catch (e) {
      return;
    }
  }
  min() {
    this.items.sort((a, b) => {
      return a - b;
    });
    return this.items[0];
  }
  average() {
    return this.sum()/this.items.length;
  }
  sum() {
    let sumElem = 0;
    sumElem = this.items.reduce((acc, ele) =>{
      return acc += ele;
    },0);
    return sumElem;
  }
}

module.exports = SortedList;
