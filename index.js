class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a - b);
    this.length++;
    // return item.sort(); 
    // return sorted;
  }

  get(pos) {
    if (pos === null || pos > this.items.length) {
      throw TypeError("OutOfBounds");
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.length === 0) {
      throw TypeError("EmptySortedList");
    } else {
      return this.items.slice(-1).pop()
    }
  }

  min() {
    if (this.length === 0) {
      throw TypeError("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg() {
    if (this.length === 0) {
      throw TypeError("EmptySortedList");
    } else {
      return (this.items.reduce((a, b) => a + b, 0) / this.length);
    }
  }
}

module.exports = SortedList;
