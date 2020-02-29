class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos) > 0) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
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

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const reducer = (acc, value) => acc + value;
      return this.items.reduce(reducer);
    }
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      let result = 0;
      this.items.forEach(item => result += item)
      return result / this.items.length;
    }
  }
}

module.exports = SortedList;
