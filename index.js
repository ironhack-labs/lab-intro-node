class SortedList {
  constructor(items) {
    this.items =[];
    this.length = this.items.length; 
  }



  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
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

  sum() {}

  avg() {}
}

module.exports = SortedList;
