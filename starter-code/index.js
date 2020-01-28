class SortedList {
  constructor(...items) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
    
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
      return this.items.reduce((acc, val) => {
        return acc + val;
      }, 0);
    }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
