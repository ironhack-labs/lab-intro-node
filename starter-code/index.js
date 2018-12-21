class SortedList {

  constructor() {

    this.items = [];
    this.length = this.items.length;

  }

  add(item) {

    this.items.push(item);
    this.items.sort( (a,b) => a-b);
    this.length = this.items.length ;
  }

  get(i) {

    return this.items[i - 1];
  }

  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    return Math.max(...this.items);
  }

  min() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items);
  }

  average() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    let sum = this.sum();
    return sum / this.items.length;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }

    let sum = this.items.reduce((a, b) => a + b);
    return sum;
  }

};

module.exports = SortedList;