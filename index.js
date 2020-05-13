class SortedList {
  constructor(items, lenght) {
    this.items = [];
    this.length = this.items.length;
    this.lenght === 0;


  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  sum() {
    return this.items.reduce((suma, i) => suma + i);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum(this.items) / this.length;
    }
  }
}

module.exports = SortedList;