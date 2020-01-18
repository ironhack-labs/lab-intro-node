class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    return this.items
  }

  get(pos) {
    this.items.sort((a, b) => a - b);
    if (pos >= 0 && pos < this.length) {
    return this.items[pos]
     } else {
       return "OutOfBounds";
     }
  }

  max() {
    if (this.length === 0) {
      return "EmptySortedList";
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[this.length-1]
    }
  }
  min() {
    if (this.length === 0) {
      return "EmptySortedList";
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

// module.exports = SortedList;
