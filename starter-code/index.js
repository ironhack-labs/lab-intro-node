class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sumArr = this.items.reduce((acc, el) => {
        acc += el;
        return acc;
      }, 0);
      return sumArr / this.items.length;
    }
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const sumArr = this.items.reduce((acc, el) => {
        acc += el;
        return acc;
      }, 0);

      return sumArr;
    }
  }
}

module.exports = SortedList;

theSortedList = new SortedList();
