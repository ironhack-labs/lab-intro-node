class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length;
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }
  get(pos) {
    this.items.sort(function (a, b) {
      return (a - b)
    })
    return this.items[pos - 1]
  }
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.length - 1];
  }
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];

  }
  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length;
    }
  }
  sum() {
    console.log(this.items.length)
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }
};
module.exports = SortedList;
