class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function (a, b) {
    return a - b
  })

  }

  get(pos) {
    if (pos > this.length ) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    } 
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
  }
}

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
     return this.items.reduce((acc, val) => acc + val)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (this.items.reduce((acc, val) => acc + val)) / this.items.length;
    }
  }
}

module.exports = SortedList;
